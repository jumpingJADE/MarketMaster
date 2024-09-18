const express = require('express')
const router = express.Router()
const sqlFn = require('../mysql')

router.get('', function (req, res, next) {
  // res.send('ok')
  const sql = 'select * from test'
  sqlFn(sql, [], function (err, data) {
    if (err) {
      next(err)
      return
    }
    res.send({ code: '00000', records: data })
  })
})

module.exports = router