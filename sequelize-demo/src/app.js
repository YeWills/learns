const  express = require('express') ;
const  path = require('path') ;
const  bodyParser = require('body-parser') ;
const models = require('../models')


const app = express();

//获取req.body
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/pub',express.static(path.resolve(__dirname, 'public')))


app.post('/create', async (req,res, next)=>{
    try {
        const {name, deadline, content, status} = req.body;
        const user = await models.User.create({
            name,
            deadline,
            status,
            content
        })
        res.json({
            user,
            msg:'create success!',
        })
    } catch (error) {
        next(error)
    }
  
})

app.use((err,req,res,next)=>{
    if(err){
        res.json({
            msg:err.message,
            success:false
        })
    }
})


app.listen(3000, ()=>console.log('please open 3000 port'))
