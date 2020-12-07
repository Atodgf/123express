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
        console.log(newUsers)
        res.send(newUsers)
    }

    async createUser(req, res) {
        const {id, name, surname} = req.body
        let newUsers = asd.concat([{id, name, surname}])
        fs.writeFileSync('users.json', JSON.stringify(newUsers))
        res.send('New User created!')
    }

    async updateUser(req, res) {
        res.send('s')
    }

    async deleteUser(req, res) {
        const id_param = req.params.id
        delete asd[id_param-1]
        fs.writeFileSync('users.json', JSON.stringify(asd))
        res.send(asd) 
    }

}

module.exports = new UserController()