// Where the database connections will be performed

const Pool = require('pg').Pool; // import the connection Pool
// connection pools allow node and postgres to function together

const pool = new Pool({ // create a new Pool object
 // information are the same as the ones you inputted when starting up the shell
 // only things that will change for different projects are the database value
 user: "postgres",
 host: "localhost",
 database: "aquarium",
 password: "test",
 port: 5432,
});

module.exports = pool; // export the pool for the server to make queries to the postgres database