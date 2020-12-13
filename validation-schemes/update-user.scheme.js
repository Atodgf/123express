const Joi = require('joi');

const updateUserScheme = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    surname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
})
    .with('name', 'surname')
    

module.exports = updateUserScheme


