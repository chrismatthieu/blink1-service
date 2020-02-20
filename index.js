var Blink1 = require('node-blink1');
var blink1 = new Blink1();
const express = require('express')
const app = express()
const port = 3000

app.get('/red', (req, res) => {
  blink1.setRGB(255,0,0)
  res.send()
})
app.get('/green', (req, res) => {
  blink1.setRGB(0,255,0)
  res.send()
})
app.get('/blue', (req, res) => {
  blink1.setRGB(0,0,255)
  res.send()
})
app.get('/yellow', (req, res) => {
  blink1.setRGB(255,255,0)
  res.send()
})
app.get('/off', (req, res) => {
  blink1.setRGB(0,0,0)
  res.send()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
