const dotenv = require('dotenv');
dotenv.config();

const apikey = process.env.API_KEY;
const dburl = process.env.DATABASE_URL;

console.log("api key: " + apikey);
console.log("db url: " + dburl);