const express=require('express')
const postController=require("../controllers/post.js")
const validator=require('../validator/index.js')
const router=express.Router()
 router.get("/",postController.getpost)
 router.post("/post",validator.createPostValidator,postController.createPost)
module.exports=router; 
