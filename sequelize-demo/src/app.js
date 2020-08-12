const  express = require('express') ;
const models = require('../models')


const app = express();

app.get('/create', async (req,res, next)=>{
    const {name} = req.query;
    const user = await models.User.create({
        name
    })
    res.json({
        msg:'create success!',
    })
})


app.get('/list', async (req,res, next)=>{
    const {name} = req.query;
    const list = await models.User.findAll();
    res.json({
        list
    })
})


app.get('/detail/:id', async (req,res, next)=>{
    const {id} = req.params;

    const detail = await models.User.findOne({
        where:{id}
    });
    res.json({
        detail
    })
})


app.listen(3000, ()=>console.log('please open 3000 port'))
