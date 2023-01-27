const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const path = require("path")
const dbConnection = require("./util/mysql");

app.set('view engine','ejs')
app.set("views",path.join(__dirname,"views","articles") )

app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
const articles = [{
    title:'Test Article',
    createdAt: new Date(),
    description: 'test description'
},
{
title:'Test Article 2',
createdAt:  new Date(),
description: 'test description 2'
}]
    res.render('articles/index',{ articles: articles })
})

app.use('/articles', articleRouter)
app.listen(5000, async () => {
    console.log('listening to port');

const [data] = await dbConnection.query("SELECT 1");
if(data){
    console.log("DB fetched !");
}else{
    console.log("DB failed");
}
});