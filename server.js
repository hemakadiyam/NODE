var expres=require('express')




var app=expres()
var port=3000;

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})

app.get('/user/:name',(req,res)=>{
    var username=req.params.name;
    res.send(`Hello,${username}!`);
})

//app.get('/',(req,res)=>{
    //res.send("<h1>Hello World</h1>")
//})

app.listen(port,()=>{
    console.log('server running')
})