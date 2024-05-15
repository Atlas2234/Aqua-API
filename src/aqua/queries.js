// Setting up queries to our database

const getFish = "SELECT * FROM pets";
const getFishById = "SELECT * FROM pets WHERE id = $1"; // $# is a parameter, think of it like a placeholder for the value that will be inputted; i.e. SELECT * FROM pets WHERE id = 5, in this query $# will be equal to 5
const addFish = "INSERT INTO pets (name, species, da) VALUES ($1, $2, $3)";
const removeFish = "DELETE FROM pets WHERE id = $1";
const updateFish = "UPDATE pets SET name = $1 WHERE id = $2";

module.exports = {
 getFish,
 getFishById,
 addFish,
 removeFish,
 updateFish,
};