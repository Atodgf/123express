const fs = require('fs')
const users = fs.readFileSync('users.json', 'utf-8') 
const asd = JSON.parse(users)



class UsersService {
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