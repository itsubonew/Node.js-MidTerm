const express = require('express')
const Article = require('../models/articles')
const router = express.Router()



router.get('/', async (req, res) => {
    const article = Article.findById
    res.render('new')
})

router.get('/:id',(req,res )=> {
    res.send(req.params.id)
})

router.post('/',(req,res) => {
const {title, description, markdown} = req.body;
const article = new Article(title,description,markdown)
// try{
//     article = await article.save()
//     res.redirect(`/articles/${article.id}`)
// }catch (e){
// res.render('articles/new',{ article: article })
// }
article.save()
.then((data)=>{
    console.log(data[0][0])
    res.redirect("/");
    
}).catch((err)=>console.error(err))
 
})

module.exports = router