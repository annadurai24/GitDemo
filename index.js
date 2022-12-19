const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.json({message:'welcome to SMC'})
})

app.get('/nandi',(req,res) => {
    res.json(
        {
            name:'nandhika',
            age:27,
            school:"Rossary matriculation school,mylapore"
        });
})

app.get('/home',(req,res) => {
    res.json({username:"annadurai",password:'mageshwari'});
})

app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});



