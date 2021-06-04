const mongoose = require('mongoose');
//Creating a database
mongoose.connect('mongodb+srv://admin-atal:Test123@cluster0.gvx0g.mongodb.net/portfolio', 
{useCreateIndex: true,
useNewUrlParser: true, 
useUnifiedTopology:true}).then(()=>{
    console.log("connection successsful");
}).catch((error)=>{
    console.log(error);
});