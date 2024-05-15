// Stores the business logic related to the routes.

const pool = require('../../db'); // Importing the postgres connection pool.
const queries = require('./queries'); // Importing queries from the queries file as a queries object.

// Will usually include functions that queries information given by the route and returns the database results


const getFishes = (req, res) => {
 pool.query(queries.getFish, (error, results) => { // query the database using the getFish query in the queries file with the postgres connection pool
  if (error) throw error; // if there is an error than display that error
  res.status(200).json(results.rows); // if no errors/status code 200 is responded then then display the rows of the query which will be given by the database in a json format
 });
};

const getFishesById = (req, res) => {
 const id = parseInt(req.params.id); // get the :id paramater of the route from the HTTP request and cast it to an integer
 pool.query(queries.getFishById, [id], (error, results) => { // we need to pass in the id
 // pass in variable values in an array
 // the values of the array will populate the $# parameters of the query
  if (error) throw error;
  res.status(200).json(results.rows);
 });
}

const addFishes = (req, res) => {
 const { name, species, date_arrived: da } = req.body; // destructure the req.body which will have an object containing the information for one fish
 pool.query(queries.addFish, [name, species, da], (error, results) => {
  if (error) throw error;
  res.status(201).send("New fish added to the aquarium"); // status 201 will be sent by the database if it successfully creates a record in a table

 });
}

const removeFishes = (req, res) => {
 const id = parseInt(req.params.id);
 pool.query(queries.getFishById, [id], (error, results) => {
  const noFishFound = !results.rows.length;
  if(noFishFound) {
   res.send("The current Fish requested to be removed does not currently exist in the aquarium!");
  } else {
   pool.query(queries.removeFish, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("The current Fish has been successfully removed from the aquarium");
   });
  };
 });
}

const updateFishes = (req, res) => {
 const id = parseInt(req.params.id);
 const { name } = req.body;
 pool.query(queries.getFishById, [id], (error, results) => {
  const noFishFound = !results.rows.length;
  if(noFishFound) {
   res.send("The current Fish requested to be removed does not currently exist in the aquarium!");
  } else {
   pool.query(queries.updateFish, [name, id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Success!");
   });
  }
 })
}

module.exports = { // export all the functions so they are used in the routes file
 getFishes,
 getFishesById,
 addFishes,
 removeFishes,
 updateFishes,
}