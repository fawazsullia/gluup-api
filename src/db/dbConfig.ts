const pg = require("pg");

const connectionString = "random";

const client = new pg.Client(connectionString);
const pool = new pg.Pool(connectionString);

const singleQueryUsingPool = async (queryString: string, params: []) => {
  try {
    return await pool.query(queryString, params);
  } catch (err) {
    return err;
  }
};

const createPool = () => {
  console.log("for test later");
};

module.exports = { createPool, singleQueryUsingPool };
