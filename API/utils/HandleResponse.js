// exports.handleResponse = (req, res) =>
// {
//     const page = req.query.page * 1 || 1
//     const totalPages = Math.ceil(doc.total / doc.limit)


//     res.json({
//         data: doc
//         , meta: {
//             braviousPage: page - 1,
//             currentPage: page,
//             // next_page:Math.ceil(doc.length)  ,
//             totalPages,
//             Items: doc.total,
//         }
//     })
// }

exports.errorHandeler = (err, req, res, next) =>
{

    console.log(`LOL in error response `);
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if (process.env.NODE_ENV == "development")
    {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        })
    } else
    {
        res.status(err.statusCode).json({
            status: err.status,
            statusCode: err.statusCode,
            message: err.message,
        })
    }

}