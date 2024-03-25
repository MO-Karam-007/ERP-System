
const asyncHandler = require('express-async-handler')
const APIFeatures = require('../utils/ApiFeatures')
const MyApiError = require('../utils/ApiErrorHandler')

exports.find = (Model, includeActiveFilter = false) =>
    asyncHandler(async (req, res, next) =>
    {
        const page = req.query.page * 1 || 1

        const { query } = req   // The main query  --> pass to the constructor

        // Class implementaion
        const apiFeatures = new APIFeatures(query)

        //Filtering 
        // includeActiveFilter To retrieve all actives and specified for Employees 
        const filters = apiFeatures.filterApiFeature(includeActiveFilter)

        // Sorting query
        const sorting = apiFeatures.apiSortingFeature()

        // PaginationA
        const pagination = apiFeatures.paginationAndLimiting()



        const doc = await Model.findAll({
            where: filters,
            order: sorting,
            limit: pagination.limit,
            offset: pagination.page
        })





        doc.total = includeActiveFilter ? await Model.count({ where: { active: true } }) : await Model.count()
        doc.limit = pagination.limit

        const totalPages = Math.ceil(doc.total / doc.limit)

        res.json({
            data: doc
            , meta: {
                braviousPage: page - 1,
                currentPage: page,
                // next_page:Math.ceil(doc.length)  ,
                totalPages,
                Items: doc.total,
            }
        })


    })


exports.findOne = (Model, includeActiveFilter = false) =>
    asyncHandler(async (req, res, next) =>
    {
        const id = req.params.id
        const doc = await Model.findByPk(id)
        if (!doc) return next(new MyApiError('Not found', 204))


        const page = req.query.page * 1 || 1
        // const totalPages = Math.ceil(doc.total / doc.limit)


        res.json({
            data: doc
            , meta: {
                braviousPage: page - 1,
                currentPage: page,
                // next_page:Math.ceil(doc.length)  ,
                // totalPages,
                // Items: doc.total,
            }
        })
    })

exports.create = Model => asyncHandler(async (req, res, next) =>
{

    const { body } = req
    const doc = await Model.create(body)
    const page = req.query.page * 1 || 1
    const totalPages = Math.ceil(doc.total / doc.limit)


    res.json({
        data: doc
        , meta: {
            braviousPage: page - 1,
            currentPage: page,
            // next_page:Math.ceil(doc.length)  ,
            totalPages,
            Items: doc.total,
        }
    })

})


exports.update = (Model) => asyncHandler(async (req, res, next) =>
{
    const id = req.params.id * 1
    const { body } = req

    const docItem = await Model.findByPk(id)
    if (!docItem) return next(new MyApiError('Not found', 204))


    const doc = await Model.update(body, { where: { id } })

    const page = req.query.page * 1 || 1
    const totalPages = Math.ceil(doc.total / doc.limit)


    res.json({
        data: doc
        , meta: {
            braviousPage: page - 1,
            currentPage: page,
            // next_page:Math.ceil(doc.length)  ,
            totalPages,
            Items: doc.total,
        }
    })
})

exports.delete = (Model) => asyncHandler(async (req, res, next) =>
{
    const id = req.params.id * 1

    const docItem = await Model.findByPk(id)
    if (!docItem) return next(new MyApiError('Not found', 204))



    const doc = await Model.destroy(
        {
            where: { id }
        },)
        .catch(err => { res.json({ err: err.message, err: err.parent }); })

    const page = req.query.page * 1 || 1
    const totalPages = Math.ceil(doc.total / doc.limit)


    res.json({
        data: doc
        , meta: {
            braviousPage: page - 1,
            currentPage: page,
            // next_page:Math.ceil(doc.length)  ,
            totalPages,
            Items: doc.total,
        }
    })

})

exports.unactiving = (Model) =>
    asyncHandler(async (req, res, next) =>
    {
        const id = req.params.id * 1

        const item = await Model.findByPk(id)
        if (!item) return next(new MyApiError('This item not found', 204))


        const doc = await Model.update({ active: false }, { where: { id } })
            .catch((err) => next(new MyApiError(err.message, 500)));


        const page = req.query.page * 1 || 1
        const totalPages = Math.ceil(doc.total / doc.limit)


        res.json({
            data: doc
            , meta: {
                braviousPage: page - 1,
                currentPage: page,
                // next_page:Math.ceil(doc.length)  ,
                totalPages,
                Items: doc.total,
            }
        })
    })

