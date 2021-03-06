const joi = require('joi');


async function validateRegister(req, res, next) {
    console.log('body validation:', req.body);
    // validate body using joi
    const schema = joi.object({
        full_name: joi.string().min(4).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    });
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        console.warn(error);
        res.status(400).send({
            error: error.details.map((e) => ({
                errorMsg: e.message,
                field: e.context.key,
            })),
        });
        return false;
    }
}

// validate login

async function validateLogin(req, res, next) {
    console.log('body validation:', req.body);
    // validate body using joi
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    });
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        console.warn(error);
        res.status(400).send({
            error: error.details.map((e) => ({
                errorMsg: e.message,
                field: e.context.key,
            })),
        });
        return false;
    }
}



module.exports = {
    validateRegister,
    validateLogin
};
