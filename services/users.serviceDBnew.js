const jwt = require('jsonwebtoken')
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres'
  });

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
  },{timestamps: false});
  
class UserServicesDB {
    async login (name)  {
        const user = await User.findOne({ where: { name: name } });
        if (user === null) {
        return('Такого пользовтеля не существует!');
        } else {
            const token = jwt.sign({name}, 'secret')
            user.password = token
            await user.save({ fields: ['password'] })
            return (`Авторизация прошла успешно, ваш пароль: ${token}`)
        }
    }

    async createUser(body) {
        await User.create({id:body.id, name: body.name, surname: body.surname});
        return ('Пользователь успешно создан!')
    }

    async getUsers() {
        const users = await User.findAll();
        return(users);
    }

    async getOneUser(id) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
        return('Такого пользовтеля не существует!');
        } else {
        return(await user.dataValues); 
        }
    }

    async updateUser(id, body) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
            return('Такого пользовтеля не существует!');
        } else {
        user.name = body.name
        user.surname = body.surname
        await user.save({ fields: ['name', 'surname'] })
        return ('Пользователь успешно обновлён!')
        }
    }

    async deleteUser(id) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
            return('Такого пользовтеля не существует!');
        } else {
            await user.destroy()
            return ('Пользователь успешно удалён!')
        }
    }
  }
module.exports = new UserServicesDB()