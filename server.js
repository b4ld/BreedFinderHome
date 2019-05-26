const app = express()
const fs = require('fs')
var path = require('path');


const express = require('express')

app.use(express.urlencoded())

const port = 3040



app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
})


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



app.listen(port, () => console.log('App listening on port ${port}!'))