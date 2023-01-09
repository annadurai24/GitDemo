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
            school:"Rossary matriculation school,mylapore",
            city:"Chennai",
            state:"Tamil Nadu"
        });
})

app.get("/employee", (req, res) => {
        res.json({employees : [
                 {
                    name : "Pothiraj S",
                    status: "Present",
                    date : "09-jan-23", 
                    inTime : "09:32:02",
                    outTime : "06:23:11"
                },
                 {
                    name : "Chittibabu S",
                    status: "Absent",
                     date : "09-jan-23",
                    inTime : "",
                    outTime : ""
                },
                 {
                    name : "Ganesan S",
                    status: "Present",
                     date : "09-jan-23",
                    inTime : "09:25:00",
                    outTime : "07:01:23"
                }
        ]})
})

app.get('/home',(req,res) => {
    res.json({username:"annadurai",password:'mageshwari'});
})

app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});



