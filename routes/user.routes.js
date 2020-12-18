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
    .get('/',auth, userController.getUsers) 
    .get('/:id', auth,  userController.getOne) 
    .post('/', multerMiddleware, userController.createUser) 
    .put('/:id', auth,validate(updateUserScheme),  userController.updateUser) 
    .delete('/:id', auth,  userController.deleteUser) 
    .post('/login',validate(loginUserScheme), userController.login)

    .get('/photos/:id',  PhotoController.getOne) 
    .post('/photos',multerMiddleware, PhotoController.createPhoto) 
    .put('/photos/:id',multerMiddleware, PhotoController.updatePhoto) 
    .delete('/photos/:id',  PhotoController.deletePhoto)
module.exports = router