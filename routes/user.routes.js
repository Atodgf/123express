const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')

router
    .get('/',  userController.getUsers) //получить всех пользователей
    .get('/:id',  userController.getOne) //получить пользователя по id
    .post('/', userController.createUser) //создать пользователя
    .put('/:id',  userController.updateUser) //обновить пользователя по id
    .delete('/:id',  userController.deleteUser) //удалить пользователя
    // .copy('/login', userController.login)
    // .get('/me', auth, userController.me)
module.exports = router