const router = require('express').Router();
const recipesRoute = require('./recipes')

router.get('/', (req, res) => {
    res.send('Pagination test')
})

router.use('/recipes', recipesRoute)

module.exports = router