const express = require('express');
const router = express.Router();

const userRoutes = require('./userController');
const campaignRoutes = require('./campaignController');
const characterRoutes = require('/characterController');
const itemRoutes = require('./itemController');
const scrollRoutes = require('./scrollController');

router.get('/',(req,res)=>{
    res.semd('welcome to the end!')
})

router.use('/api/users',userRoutes);
router.use('/api/campaigns',campaignRoutes);
router.use('/api/characters',characterRoutes);
router.use('/api/items',itemRoutes);
router.use('/api/scrolls',scrollRoutes);

module.exports = router