const {app} = require('./server')

// Activate the server -- happens all below this line vvv

app.listen(PORT, HOST, () => {
    console.log("Server is running on port: " + PORT);
});