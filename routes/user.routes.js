const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')

router
    .get('/', auth, userController.getUsers) //получить всех пользователей
    .get('/:id', auth,  userController.getOne) //получить пользователя по id
    .post('/', userController.createUser) //создать пользователя
    .put('/:id', auth,  userController.updateUser) //обновить пользователя по id
    .delete('/:id', auth,  userController.deleteUser) //удалить пользователя
    .post('/login', userController.login)
    // .get('/me', auth, userController.me)
module.exports = router