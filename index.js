require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Auri')
})
app.get('/agla', (req, res) => {
  res.send('Agla wala')
})
app.get('/auri', (req, res) => {
  res.send('<h1>Aurindum Bose<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 