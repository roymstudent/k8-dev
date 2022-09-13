const express = require('express')

const app = express()

port = 8092

var count =0
app.get('/',(req,res)=>{
    console.log("got request")
    res.send("welcome to index "+count)
    count++;
});

app.listen(port,()=>{
    console.log('app is running on port '+port);
});
 