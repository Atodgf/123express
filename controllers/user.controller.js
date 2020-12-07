const fs = require ('fs')
const users = fs.readFileSync('users.json', 'utf-8') //string
const asd = JSON.parse(users)


class UserController {
    async getUser(req, res) {
        res.send(asd)
    }

    async getOneUser(req, res) {
        const id_param = req.params.id
        const newUsers = []
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id == id_param) {
                newUsers.push(asd[i])
            }
        }
        res.send(newUsers)
    }

    async createUser(req, res) {
        const {id, name, surname} = req.body
        let newUsers = asd.concat([{id, name, surname}])
        fs.writeFileSync('users.json', JSON.stringify(newUsers))
        res.send('New User created!')
    }

    async updateUser(req, res) {
        const id_param = req.params.id
        const name_param = req.body.name
        const surname_param = req.body.surname
        const newUsers = []
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id == id_param) {
                newUsers.push(asd[i])
            }
        }
        newUsers[0].name = name_param
        newUsers[0].surname = surname_param
        console.log(newUsers)
        res.send("ok")
    }

    async deleteUser(req, res) {
        const id_param = req.params.id
        const newUsers = []
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id != id_param) {
                newUsers.push(asd[i])
            }
        }
        fs.writeFileSync('users.json', JSON.stringify(newUsers))
        res.send("ok") 
    }

}

module.exports = new UserController()