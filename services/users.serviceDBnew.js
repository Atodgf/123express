const jwt = require('jsonwebtoken')
const User = require('../models/user');


class UserServicesDB {
    async login (name, password)  {
        const user = await User.findOne({ where: { name: name } });
        if (user === null) {
        return('Такого пользовтеля не существует!');
        } else {
            const token = jwt.sign({name, password}, 'secret')
            user.password = token
            await user.save({ fields: ['password'] })
            return (`Авторизация прошла успешно, ваш токен для авторизации: ${token}`)
        }
    }

    async createUser(dataToUpdate) {
        await User.create({id:dataToUpdate.id, name: dataToUpdate.name, surname: dataToUpdate.surname, avatar: dataToUpdate.avatar});
        return ('Пользователь успешно создан!')
    }

    async getUsers(page, count) {
        const users = await User.findAll({
            limit:page,
            offset:count
        });
        console.log(users)
        return({page: page, count: count, users: [users]});
    }

    async getOneUser(id) {
        const user = await User.findByPk(id, {include: ['photos']});
        if (user === null) {
        return('Такого пользовтеля не существует!');
        } else {
        return(user.dataValues); 
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