require("dotenv").config();
const app = require("../src/api");

const port = process.env.API_PORT || 5000;

app.listen(port);

console.log(`Server running on port ${port}`);