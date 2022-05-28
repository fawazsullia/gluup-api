const pg = require("pg");
const devConnString = `postgresql://gluupadmin:kenkaneki13@localhost:5432/gluup`
const connectionString = process.env.NODE_ENV === "production" ? "" : devConnString;

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
