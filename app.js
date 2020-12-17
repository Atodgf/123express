const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user.routes')
const multer = require('multer')
const uuid = require('uuid')
const User = require('./models/user')

const app = express()

app.use('/public', express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', userRouter)


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})