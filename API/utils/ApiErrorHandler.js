

class MyApiError extends Error
{

    constructor(message, statusCode)
    {
        super(message)
        this.statusCode = statusCode || 'fail'
        this.status = `${this.statusCode}`.startsWith(4) ? 'fail' : 'error'
        this.isOperatopnal = true;
    }
}


module.exports = MyApiError