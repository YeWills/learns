const  express = require('express') ;


const app = express();

app.get('/test', (req,res, next)=>{
    res.json({
        msg:'test ',
    })
})


app.listen(3000, ()=>console.log('please open 3000 port'))
