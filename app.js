const express = require('express')
const app = express()
const port = 3003
route = require('./routes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})