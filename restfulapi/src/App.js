const express = require("express");
const database = require("./db/conn");
const Student = require("./models/student");

database().then(()=>{
    console.log("Successful");
}).catch((e)=>{
    console.log(e);

})
const app = express();
const port = process.env.PORT || 3000 ;

app.use(express.json());
// Create a new Students

// Post methd using then and catch

// app.post("/students",(req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })

// Post methd using async and await

app.post("/students", async(req,res) =>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})

app.get("/students", async (req,res) =>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

// get the indivisual Student data using id
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }
        else{
                res.send(studentData);
            }
            
    } 
    catch (e) {
        res.status(500).send(e);
    }
   
    
})



app.listen(port, () => {
    console.log(`Connection is setup at  ${port}`)
});