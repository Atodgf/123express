const usersService = require('../services/users.serviceDBnew')


class UsersController {
    service = usersService


    getUsers = (req, res) => {
        this.service.getUsers(req.query.page, req.query.count)
        .then(result => res.send(result))
    }

    getOne = (req, res) => {
        this.service.getOneUser(req.params.id)
        .then(result => res.send(result))
    }

    createUser = (req, res) => {
        console.log(req)
        this.service.createUser({...JSON.parse(req.body.data)})
        .then(result => res.send(result))
    }

    updateUser = (req, res) => {
        this.service.updateUser(req.params.id, req.body)
        .then(result => res.send(result))
    }

    deleteUser = (req, res) => {
        this.service.deleteUser(req.params.id)
        .then(result => res.send(result))
    }

    login = (req, res) => {
        this.service.login(req.body.name, req.body.password).then(result => res.send(result))
    }
}

module.exports = new UsersController()