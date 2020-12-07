const express = require('express')
const userRouter = require('./routes/user.routes')

const app = express()
const port = 3000



app.use(express.json())
app.use('/api', userRouter)


app.listen(port, () => {
    console.log (`Example app listening at http://localhost:${port}`)
})