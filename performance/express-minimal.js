'use strict'

const service = require('express')({})

service.get('/hi', (req, res) => {
  res.send('Hello World!')
})
service.listen(3000)
