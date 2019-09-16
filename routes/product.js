const express = require('express')
const router = express.Router()

router.get('/product', async(req,res)=>{
    res.render('partials/product')
})

module.exports = router;