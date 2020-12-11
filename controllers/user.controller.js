const usersService = require('../services/users.serviceDBnew')
class UsersController {
    service = usersService


    getUsers = (req, res) => {
        this.service.getUsers().then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.getUsers())
    }

    getOne = (req, res) => {
        this.service.getOneUser(req.params.id).then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.getOneUser(req.params.id))
    }

    createUser = (req, res) => {
        this.service.createUser(req.body).then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.createUser(req.body))
    }

    updateUser = (req, res) => {
        this.service.updateUser(req.params.id, req.body).then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.updateUser(req.params.id, req.body))
    }

    deleteUser = (req, res) => {
        this.service.deleteUser(req.params.id).then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.deleteUser(req.params.id))
    }
}

module.exports = new UsersController()