const jwt = require('jsonwebtoken')
const User = require('../models/user');
const bcrypt = require('bcrypt')


class UserServicesDB {
    async login (name, password)  {
        const user = await User.findOne({ where: { name: name } });
        if (user === null) {
        return('User not exist!');
        } else {
            if (bcrypt.compareSync(password, user.password)  != true){
                return ("Invalid password!")
            } else {
            const token = jwt.sign({name, password}, 'secret')
            return (`Success, your jwt token: ${token}`)}
        }
    }

    async createUser(dataToUpdate) {
        const saltRounds = 10
        const hash  =  bcrypt.hashSync(dataToUpdate.password, saltRounds);
        await User.create({id:dataToUpdate.id, name: dataToUpdate.name, surname: dataToUpdate.surname, avatar: dataToUpdate.avatar, password: hash });
        return ('User successfully created!')
    }

    async getUsers(page, count) {
        const users = await User.findAndCountAll({
            limit:page,
            offset:count
        });
        return({users: users.rows, page: page, count: count, totalCount: users.count});
    }

    async getOneUser(id) {
        const user = await User.findByPk(id, {include: ['photos']});
        if (user === null) {
        return('User not exist!');
        } else {
        return(user.dataValues); 
        }
    }

    async updateUser(id, body) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
            return('User not exist!');
        } else {
        user.name = body.name
        user.surname = body.surname
        await user.save({ fields: ['name', 'surname'] })
        return ('User successfully updated!')
        }
    }

    async deleteUser(id) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
            return('User not exist!');
        } else {
            await user.destroy()
            return ('User successfully deleted!')
        }
    }
  }
module.exports = new UserServicesDB()