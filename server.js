// Creating express server
const express = require('express'); // importing the express framework with the require function
const studentRoutes = require('./src/aqua/routes'); // importing our router object from the routes.js file

const app = express(); // the express function creates an express application
const port = 3000;

app.use(express.json()); // adding middleware that allows us to post and get json from the endpoints


app.get("/", (req, res) => { // Route HTTP GET requests to the path www.websitename/ using the router object.
 res.send("Hello World!"); // Sending HTTP response with res.send
 // res.send accepts Strings, Buffer object, normal object, or array
});

app.use('/api/v1/aquarium', studentRoutes); // use the routes in studentRoutes when the URI includes the string provided
// for example: www.websitename/api/v1/aquarium/ with the GET header will use the route "router.get('/', controller.getStudents).."

app.listen(port, () => { // telling your app to start listening for visitors on a specific address and port.
 // callback is used for performing some action when a visitor arrives
 console.log(`app listening on port ${port}`);
});