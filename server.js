const app = express()
const fs = require('fs')

const express = require('express')

app.use(express.urlencoded())

app.post('/submit-form', (req, res) => {
    const email = req.body.username
    
    fs.appendFile('emailList.txt', email, (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("SAVED")
      })

    res.end()
  })