const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')
const multerMiddleware = require('../middlewares/multer.middleware')
const validate = require('../middlewares/validation.middleware')
const loginUserScheme = require('../validation-schemes/login-user.scheme')
const updateUserScheme = require('../validation-schemes/update-user.scheme')

router
    .get('/', auth, userController.getUsers) //получить всех пользователей
    .get('/:id', auth,  userController.getOne) //получить пользователя по id
    .post('/', multerMiddleware, userController.createUser) //создать пользователя
    .put('/:id', auth,validate(updateUserScheme),  userController.updateUser) //обновить пользователя по id
    .delete('/:id', auth,  userController.deleteUser) //удалить пользователя
    .post('/login',validate(loginUserScheme), userController.login)//получение JSON токена если пользователь есть в базе

module.exports = router