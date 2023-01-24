const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('recipes page')
})

module.exports = router