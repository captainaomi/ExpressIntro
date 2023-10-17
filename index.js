// import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();

// GET localhost:3000/
// app.get(route path, callback function)
app.get("/", (request, response) => {

    response.send("Hello world, this server is bananas!");

});

// Configure the server -- happens all above this line ^^^

// Activate the server -- happens all below this line vvv

app.listen(3000, () => {
    console.log("Server is running on port: " + 3000);
})