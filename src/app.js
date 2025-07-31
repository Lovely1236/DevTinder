//This is the starting point of your application -> means this is the core javascript 
//file where we write our node js 

// console.log("Starting a new project!!!!!!");

const express = require("express");
const app= express();

app.use((req, res) => {
    res.send("Namaste from the server....");
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});
