const express = require('express')
const PORT = 3030
const app = express()
const bodyParser = require('body-parser')
const menu = require('./routes/menu')
const test = require('./routes/test')

app.use(bodyParser.json())
app.use('/menu', menu)
app.use('/', test)

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status('500').send('Some Error in Server')
})

app.listen(PORT, function () {
  console.log(`Server is running at ${PORT}`);
})