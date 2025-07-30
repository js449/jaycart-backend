// data-access/db.js
const { Pool } = require("pg"); // Import the pg module for PostgreSQL from node-postgres

// Create a new pool instance to manage connections to the PostgreSQL database
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:Paramhans11$@localhost:5432/jaycart_db",
});

// Log a message when the pool connects to the database
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

// Log an error if the pool encounters an error
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

// Export a query function that can be used to execute SQL queries
// This function takes a SQL text and parameters, and returns the result of the query
module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => pool.connect(), // needed for test startup
  end: () => pool.end(), // needed for test teardown
};
