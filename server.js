const express = require('express')
const app = express()
const port = 3000
const db = require("./db");
const personRouter = require("./routes/personRoutes")
const menuitemRouter = require("./routes/menuitemRoutes");

const bodyParser = require("body-parser")
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('hey we are gonna start the nodejs project!')
});

app.use('/person',personRouter);

app.use('/menutiem',menuitemRouter);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
  "200": "OK - The request was successful.",
  "201": "Created - A new resource was successfully created.",
  "400": "Bad Request - The request is invalid (e.g., missing fields).",
  "401": "Unauthorized - Authentication is required or failed.",
  "403": "Forbidden - You don’t have permission to access this.",
  "404": "Not Found - The requested resource doesn't exist.",
  "409": "Conflict - Resource already exists or conflicting data.",
  "500": "Internal Server Error - Something went wrong on the server."
*/