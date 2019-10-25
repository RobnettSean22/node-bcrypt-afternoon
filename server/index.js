const express = require('express')
const app = express()
const massive = require('massive');
const session = require('express-session')
const {SESSION_SECRET} = process.env
const {CONNECTION_STRING} = process.env
require('dotenv').config()
app.use(express.json())
app.use()
const port = 4000

massive()
app.set

app.listen({port}, () => console.log(`herd on ${port}`))