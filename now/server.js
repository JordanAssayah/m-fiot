var express = require('express')
var path = require('path')
var port = process.env.PORT || 80
var app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))

app.listen(port)
