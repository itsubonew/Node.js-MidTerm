require("dotenv").config();
const express = require('express')
// const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()
const dbConnection = require("./util/mysql");
const path =require("path");
const Article = require('./models/articles');




// mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true })

app.set('view engine','ejs')
app.set("views",path.join(__dirname,"views","articles") )

app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
// const articles = [{
//     title:'Test Article',
//     createdAt: new Date(),
//     description: 'test description'
// },
// {
// title:'Test Article 2',
// createdAt:  new Date(),
// description: 'test description 2'
// }]
    
    Article.find()
    .then((data)=>{
        // console.log(";lkj;lkj;lkj;lkj;lk;k",data[0],";lkj;lkj;lkj;lkj;lkj;lkj;jk ");
        res.render('index', {datas: data[0]})
    }).catch((err)=>console.error(err.message));
    
})

app.use('/articles', articleRouter)

// app.listen(5000, async () => {
//     console.log('listening to port');
const port = 8001
app.listen(port,async()=>{
    const[data] = await dbConnection.query("SELECT 1");
    if(data) console.log("Success!!!!");
})
// });