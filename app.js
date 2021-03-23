const express = require('express')
const userRouter = require('./routes/user.routes')


const app = express()

app.use('/public', express.static('public'))
app.use('/users', userRouter)


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})