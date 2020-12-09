const Router = require('express')
const router = new Router()
const userController = require('../db/user.controllerDB')

router
    .get('/user', userController.getUsers) //получить всех пользователей
    .get('/user/:id', userController.getOne) //получить пользователя по id
    .post('/user', userController.createUser) //создать пользователя
    .put('/user/:id', userController.updateUser) //обновить пользователя по id
    .delete('/user/:id', userController.deleteUser) //удалить пользователя

module.exports = router