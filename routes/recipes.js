const router = require('express').Router();
const recipes = require('../recipes.json')

router.get('/', (req, res) => {
    //limit = selisih start slice dengan end
    //page = slice end didapat dari page * limit
    // console.log(req.query.page, req.query.limit);
    let end = 3;
    let start = 0
    let page = req.query.page;
    let limit = req.query.limit;
    if (!limit) limit = 3;
    if (page) {
        end = page * limit;
        start = end - limit;
    }
    // let output = recipes.slice(3, 6)
    let output = recipes.slice(start, end)
    res.status(200).json(output)
})

module.exports = router