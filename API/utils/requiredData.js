
const MyApiError = require('./ApiErrorHandler')
exports.checkBody = (...params) =>
{
    return (req, res, next) =>
    {
        params.forEach(param =>
        {

            if (!req.body.hasOwnProperty(param) || req.body[param] == '')
            {
                return next(new MyApiError(`Missing the ${param} value`, 400))
            }
        })
        next()
    }
}

// params first_name , last_name
// loop over the params
// first_name check id it's the body properrty or no
// if no return Error 👉👉
// Check if the value is empty reutn error