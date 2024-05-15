// Storing the routes/endpoints of our Express API 

const {Router} = require('express'); // Importing the Express router
const controller = require('./controller'); // Importing the controller functions 

const router = Router(); // Create a new express router object with Router()

router.get('/', controller.getFishes); // Route HTTP GET requests to a specified path using the router object. 
//Express knows the parameters and that the getStudents function is a callback function
 // the string will be the web address that appears after the application name
 // req is the request sent by a visitor to the server
 // res is the response sent by the server to the vistor

router.post("/", controller.addFishes); // Note: you can have the same endpoint for different HTTP request methods including HTTP GET and HTTP POST

router.get("/:id", controller.getFishesById); // :id is a parameter, think of it like a placeholder for the value that will be inputted; i.e. www.webname/1, in this get route the :id will be equal to 1

router.delete("/:id", controller.removeFishes);

router.put("/:id", controller.updateFishes);

module.exports = router; // export the router object so we can handle the routing in server.js