// import the server package
const bananas = require('express');
// make an instance of the server that we can customise and run
const app = bananas();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
// Fun fact: ports can only be an integer between 1001 and 65536


// GET localhost:3000/
// app.get(route path, callback function)
app.get("/", (request, response) => {

    response.send("Hello world, this server is bananas!");

});

// Configure the server -- happens all above this line ^^^

// Activate the server -- happens all below this line vvv

app.listen(PORT, HOST, () => {
    console.log("Server is running on port: " + PORT);
});