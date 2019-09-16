const express = require('express')
const router = express.Router()

router.get('/user', async(req,res)=>{
    res.render('../views/partials/user')
})

module.exports = router;