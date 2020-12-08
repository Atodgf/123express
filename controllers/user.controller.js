const usersService = require('../services/user.service')
class UsersController {
    service = usersService
    getUsers = (req, res) => {
        res
            .status(200)
            .send(this.service.getUsers())
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



}

module.exports = new UsersController()