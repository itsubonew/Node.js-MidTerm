const express = require('express')
const Article = require('../models/articles')
const router = express.Router()



router.get('/', async (req, res) => {
    const article = Article.findById
    res.render('new')
})

router.get('/:id',(req,res)=> {
    res.send(req.params.id)
})

router.post('/',(req,res) => {
const {title, description, markdown} = req.body;
const article = new Article(title,description,markdown)



article.save()
.then((data)=>{
    // console.log(data[0][0])
    res.redirect("/");
    
}).catch((err)=>console.error(err))
 
})

router.get("/:id/edit",updateOne);

const undateArticle = {
    id: +req.params.id,
    title,
    description,
    markdown
}

Article.updateOne(
    req.params.id,
    title,
    description,
    markdown,({message, status}) => {
        if (status === 200) {
            res.redirect("/");
        } else{
            res.status(status).send(message);
        }
    }
)
//async(req, res, next) => {
//     const itsubo = req.params.id;
//     next()
//     const  updateOne = await Article.updateOne(itsubo);
//     console.log(updateOne);
//     res.redirect("/")
// }
router.put("/:id/edit", updateOne);

router.post("/delete/:id",async(req, res, next) => {
    const iwatani = req.params.id;
    next()
    // Article.deleteOne(iwatani).
    // then((data)=>{
    //     console.log(data);
    //     res.redirect("/");

    // }).catch((err)=>console.error(err.message))
        const deleteOne = await Article.deleteOne(iwatani);
        
        console.log(deleteOne)
        
        res.redirect("/")
    

    
});





module.exports = router