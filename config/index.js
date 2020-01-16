module.exports = require('mongoose').connect('mongodb://localhost/googlebooks', {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})