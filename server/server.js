const path = require('path')
const express = require('express')
//rubin and andy was here
const server = express()
const routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', routes)

module.exports = server
