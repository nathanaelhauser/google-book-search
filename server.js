const express = require('express')
const { join } = require('path')

const app = express()

require('./routes')(app)

app.listen(3001)