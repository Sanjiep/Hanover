const express = require('express');
const app = express();
const connection = require('./db/connection')
const cors = require('cors')
app.use(cors())
require('dotenv').config();

app.use(express.json())
connection()

const userRoute = require('./routes/user')
const contactRoute = require('./routes/contact')

app.use(userRoute)
app.use(contactRoute)
const port = process.env.PORT

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})