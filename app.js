const express = require('express')
const app = express()
const port = 3003
route = require('./routes')

app.get('/', (req, res) => {
  res.send('Pagination test')
})

app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})