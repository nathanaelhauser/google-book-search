const mongoose = require('mongoose')

const MONDODB_URI = process.env.MONDODB_URI || 'mongodb://localhost/googlebooks'


console.log(`
---------------------------------------------
---------------------------------------------
${MONDODB_URI}
---------------------------------------------
---------------------------------------------
`)

module.exports = mongoose.connect(MONDODB_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})