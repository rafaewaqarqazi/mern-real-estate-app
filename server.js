const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');

const publicDirectory= path.join(__dirname,'client', 'build');
console.log(publicDirectory);
const port = process.env.PORT || 5000;


app.use(express.static(publicDirectory));

//Using Routes

app.use('/api/users', users);

//Body Parser
app.use(bodyParser.json());

//DB CONFIG

const db = require('./config/keys').mongoURI;

//Connect to MongoDB

mongoose.connect(db)
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log(err.message));

app.get('*',(req, res)=>{
    res.sendFile(path.join(publicDirectory,'index.html'));
});

app.listen(port,()=>{
    console.log(`Server in running on PORT ${port}`);
});