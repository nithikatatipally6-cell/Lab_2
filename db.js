// db.js - Database configuration helper
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const dbPath = path.join(__dirname, "bookstore.db");

const getDatabaseInstance = async () => {
  return await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
};

module.exports = { getDatabaseInstance, dbPath };
