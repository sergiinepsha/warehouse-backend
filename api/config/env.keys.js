'use strict';

// load env variables
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

if (dotenv.error) {
  throw new Error('.env file is not specified');
}

const {
  CORS_URL,
  MONGO_URI,
  NODE_MODE,
  PG_DB,
  PG_HOST,
  PG_PASS,
  PG_URI,
  PG_USER,
  PORT,
} = process.env;

module.exports = {
  CORS_URL,
  MONGO_URI,
  NODE_MODE,
  PG_DB,
  PG_HOST,
  PG_PASS,
  PG_URI,
  PG_USER,
  PORT,
};
