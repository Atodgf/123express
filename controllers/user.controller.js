const usersService = require('../services/users.serviceDBnew')


class UsersController {
    service = usersService


    getUsers = (req, res) => {
        this.service.getUsers(req.query.page, req.query.count)
        .then(result => res.send(result))
        // res
        //     .status(200)
        //     .send({
        //         users: this.service.getUsers(),
        //         login: req.login
        //     })
    }

    getOne = (req, res) => {
        this.service.getOneUser(req.params.id)
        .then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.getOneUser(req.params.id))
    }

    createUser = (req, res) => {
        this.service.createUser({...JSON.parse(req.body.data), avatar: req.file.path})
        .then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.createUser(req.body))
    }

    updateUser = (req, res) => {
        this.service.updateUser(req.params.id, req.body)
        .then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.updateUser(req.params.id, req.body))
    }

    deleteUser = (req, res) => {
        this.service.deleteUser(req.params.id)
        .then(result => res.send(result))
        // res
        //     .status(200)
        //     .send(this.service.deleteUser(req.params.id))
    }

    login = (req, res) => {
        console.log(req.body.password)
        this.service.login(req.body.name, req.body.password).then(result => res.send(result))
    }
}

module.exports = new UsersController()