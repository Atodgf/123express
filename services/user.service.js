const fs = require('fs')
const users = fs.readFileSync('users.json', 'utf-8') 
const asd = JSON.parse(users)
const jwt = require('jsonwebtoken')



class UsersService {

    login = (login, password) => {
        const token = jwt.sign({login}, 'secret')
        return token
    }


    getUsers() {
        return(asd)
    }

    getOneUser(id) {
        const newUsers = []
        for (let i = 0; i < asd.length; i++) {
            if (asd[i].id == id) {
                newUsers.push(asd[i])
            }
        }
        return newUsers
    }

    createUser(id) {
        console.log(id)
        let newUsers = asd.concat([id])
        fs.writeFileSync('users.json', JSON.stringify(newUsers))
        return('Новый пользователь создан!')
    }

    updateUser(id, body) {
        const newUsers = []
        for (let i = 0; i < asd.length; i++) {
            if (asd[i].id == id) {
                newUsers.push(asd[i])
            }
        }
        newUsers[0].name = body.name
        newUsers[0].surname = body.surname
        
    
        const restUsers = []
        for (let i = 0; i < asd.length; i++) {
            if (asd[i].id != id) {
                restUsers.push(asd[i])
            }
        }
        let finalUsers = restUsers.concat(newUsers)
        fs.writeFileSync('users.json', JSON.stringify(finalUsers))
        return ('Данные пользователя успешно изменёны!')
    }

    deleteUser(id) {
        const newUsers = []
        for (let i = 0; i < asd.length; i++) {
            if (asd[i].id != id) {
                newUsers.push(asd[i])
            }
        }
        fs.writeFileSync('users.json', JSON.stringify(newUsers))
        return('Данные пользователя успешно удалены!')
    }

}

module.exports = new UsersService()


// const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
//     host: 'localhost',
//     dialect: 'postgres'
//   }
//   )
//   try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


  


