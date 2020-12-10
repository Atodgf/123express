const usersService = require('../services/users.serviceDB')
class UsersController {
    service = usersService
    

    getUsers = (req, res) => {
        console.log('test')
        res
            .status(200)
            .send({
                users: this.service.getUsers(),
                // login: req.login
            })
    }

    getOne = (req, res) => {
        res
            .status(200)
            .send(this.service.getOneUser(req.params.id))
    }

    createUser = (req, res) => {
        res
            .status(200)
            .send(this.service.createUser(req.body))
    }

    updateUser = (req, res) => {
        res
            .status(200)
            .send(this.service.updateUser(req.params.id, req.body))
    }

    deleteUser = (req, res) => {
        res
            .status(200)
            .send(this.service.deleteUser(req.params.id))
    }

    login = (req, res) => {
        res.send(this.service.login(req.body.login, req.body.password))
    }

    me = (req, res) => {
        res.send({login: req.login})
    }


}

module.exports = new UsersController()