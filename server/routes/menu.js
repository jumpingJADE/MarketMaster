const express = require('express')
const router = express.Router()
const sqlFn = require('../mysql')

router.post('/add', function (req, res, next) {
  const sql = 'insert into menu values(null,?,?,?,?,?,?)'
  const { pid = -1, name, linkUrl, openType, icon, isOfAdmin } = req.body
  const arr = [pid, name, linkUrl, openType, icon, isOfAdmin]
  sqlFn(sql, arr, function (err, data) {
    if (err) {
      next(err)
      return
    }
    if (data.affectedRows) {
      res.send({ code: '00000', success: true })
    }
  })
})

module.exports = router