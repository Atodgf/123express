const fs = require ('fs')
const users = fs.readFileSync('users.json', 'utf-8') //string
const asd = JSON.parse(users)


class UserController {
    async getUser(req, res) {
        res.send(asd)
    }

    async getOneUser(req, res) {
        const id_param = req.params.id
        const newUSers = []
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id == id_param) {
                newUSers.push(asd[i])
            }
        }
        res.send(newUSers)
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
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id == id_param) {
                asd[i].name == name_param
                asd[i].surname == surname_param
                console.log(asd[i].surname)
            }
            
        }
        res.send('s')
    }

    async deleteUser(req, res) {
        const id_param = req.params.id
        for (let i = 0; i < asd.length; i++){
            if (asd[i].id == id_param) {
                newUSers.push(asd[i])
            }
        }
        res.send(newUSers) 
    }

}

module.exports = new UserController()