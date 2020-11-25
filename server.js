const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const users = require('./routes/api/users');
const uploads = require('./routes/api/uploads');
const property = require('./routes/api/property');
const session = require('express-session');
const cors = require('cors');
const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const publicDirectory= path.join(__dirname,'client', 'build');
console.log(publicDirectory);
const port = process.env.PORT || 5000;

//Set Storage
app.use(cors());



app.use(express.static(publicDirectory));
app.use(express.static('./public'));
//Handles Express Sessions
app.use(session({
    secret:'cats',
    saveUninitialized:false,
    resave:false
}));





app.use(bodyParser.json());
app.use(cookieParser())
//Passport
app.use(passport.initialize());
app.use(passport.session());

//Using Routes
app.use('/api/users', users);
app.use('/api/uploads',uploads);
app.use('/api/property',property);

//DB CONFIG

const db = require('./config/keys').mongoURI;

//Connect to MongoDB

mongoose.connect(db, { useNewUrlParser: true })
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log(err.message));

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.get('*',(req, res)=>{
    res.sendFile(path.join(publicDirectory,'index.html'));
});

app.listen(port,()=>{
    console.log(`Server in running on PORT ${port}` );
});