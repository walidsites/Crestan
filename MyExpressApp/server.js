var express = require('express');
var app = express();
var APIRouter = require('./Routes/Routes');

const port = process.env.PORT || 8080;
app.set('port', port);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use("/API", APIRouter)

app.listen(port, () => console.log(`Listening on Port ${port}`));
