const Sequelize = require("sequelize");

const Op = Sequelize.Op

class APIFeatures
{
    constructor(query)
    {  // --> REQ.QUERY
        this.query = query;
        this.features = ["sort", "page", "limit",]  //Features  
        this.reqQueryClone = { ...query }
    }

    filterApiFeature(includeActiveFilter)
    {
        console.log(`includeActiveFilter`, includeActiveFilter);
        this.features.forEach(el => { delete this.reqQueryClone[el] });

        // Not working 💔
        // this.reqQueryClone = includeActiveFilter ? { ...this.reqQueryClone, active: 'true' } : this.reqQueryClone

        console.log(`this.reqQueryClone`, this.reqQueryClone);

        const filters = !!Object.keys(this.reqQueryClone).length ?
            Object.keys(this.reqQueryClone).map(
                el =>
                {
                    return { [Op.or]: { [el]: { [Op.like]: `%${this.query[el]}%` } } };
                }
            )
            : null;

        return filters

    }


    apiSortingFeature()
    {
        const sort = this.query.sort
        // Sorting query

        const sorting = this.query.sort ? sort.split(',').map(el =>
        {
            return [el, 'ASC']
        }) : [['id', 'ASC']]
        return sorting
    }

    paginationAndLimiting()
    {
        const page = this.query.page * 1 || 1
        const limit = this.query.limit * 1 || 10

        // Pagination
        return { page: (page - 1) * limit, limit };
    }


}



module.exports = APIFeatures