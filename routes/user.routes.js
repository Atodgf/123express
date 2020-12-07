const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')

router
    .get('/user', userController.getUser) //получить всех пользователей
    .get('/user/:id', userController.getOneUser) //получить пользователя по id
    .post('/user', userController.createUser) //создать пользователя
    .put('/user/:id', userController.updateUser) //обновить пользователя по id
    .delete('/user/:id', userController.deleteUser)  //удалить пользователя



module.exports = router