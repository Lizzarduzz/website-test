const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));