const express = require('express')
const app = express()
const connection = require('./config/db')
const users = require('./router/users')
const port = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Haii ini hasil dari modul-2 punya muti!!')
})

app.use(users)

connection()

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
