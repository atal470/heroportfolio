const express = require("express");
const path=require("path");
const app=express();
const User=require("./models/usermessage");
require("./db/conn");
const hbs=require("hbs");


//static files
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(path.join(__dirname, '../public/css')))
app.set("view engine", "hbs") 
app.set("views",path.join(__dirname, "../templates/views"))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))
app.use(express.urlencoded({extended:false})) //To the tell the express what data we are writing in contact so wec can get that data



app.get('/',(req,res)=>{
    res.render("index");
})


app.post("/contact",async(req,res)=>{
    try{
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("c");

    }catch(error){
        res.status(500).send(error)
    }
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,()=>{
    console.log(`servers is running at ${port}`)
})
