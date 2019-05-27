const express = require('express')
const fs = require('fs')
var path = require('path');


const app = express()

app.use(express.urlencoded())

const port = 3040



app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.post('/submit-form', (req, res) => {
    const email = req.body.email
    
    fs.appendFile('emailList.txt', email+'\n', (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log("SAVED")
    })
    res.redirect('/');
})



app.listen(port, () => console.log('App listening on port '+port))