const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const PhotoController = require('../controllers/photo.controller')
const auth = require('../middlewares/auth.middleware')
const multerMiddleware = require('../middlewares/multer.middleware')
const validate = require('../middlewares/validation.middleware')
const loginUserScheme = require('../validation-schemes/login-user.scheme')
const updateUserScheme = require('../validation-schemes/update-user.scheme')

router
    .get('/', userController.getUsers) //получить всех пользователей
    .get('/:id', auth,  userController.getOne) //получить пользователя по id
    .post('/', multerMiddleware, userController.createUser) //создать пользователя
    .put('/:id', auth,validate(updateUserScheme),  userController.updateUser) //обновить пользователя по id
    .delete('/:id', auth,  userController.deleteUser) //удалить пользователя
    .post('/login',validate(loginUserScheme), userController.login)//получение JSON токена если пользователь есть в базе

    .get('/photos/:id',  PhotoController.getOne) //получить фото пользователя по id
    .post('/photos',multerMiddleware, PhotoController.createPhoto) //создать новое фото пользователя
    .put('/photos/:id',multerMiddleware, PhotoController.updatePhoto) //обновить фото пользователя по id
    .delete('/photos/:id',  PhotoController.deletePhoto) //удалить фото пользователя
module.exports = router