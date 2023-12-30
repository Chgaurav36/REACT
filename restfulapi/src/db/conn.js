const mongoose = require("mongoose");

const database = async()=> {
   try {
    await mongoose.connect("mongodb+srv://chgaurav36:archana1@cluster0.saroqgc.mongodb.net/mern?retryWrites=true&w=majority");
    console.log("Connection Successful");
   } catch (error) {
    console.log(error);
    }
}

module.exports = database;