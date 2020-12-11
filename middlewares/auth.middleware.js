const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const [strategy, token] = req.headers['authorization'].split(' ')
        console.log(token)
        const result = jwt.verify(token, 'secret')
        req.login = result.login
        next()
    } catch (e) {
        res.status(401).send(e.message)
    }
}

module.exports = auth