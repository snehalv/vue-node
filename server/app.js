require("dotenv").config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => {
        console.log("Connected To DB")
    }).catch(err => console.log(err));


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }))
app.use(express.static("uploads"))

app.post('/signup', (req, res) => {
    const newUser = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 10)
    })
    newUser.save(err => {
      if (err) {
        return res.status(400).json({
          title: 'error',
          error: 'This email is already in use.'
        })
      }
      return res.status(200).json({
        title: 'signup success!!!!!'
      })
    })
  });
  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.status(500).json({
        title: 'server error',
        error: err
      })
      if (!user) {
        return res.status(401).json({
          title: 'user not found',
          error: 'User not found! Please Sign Up.'
        })
      }
      //incorrect password
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          title: 'login failed',
          error: 'Invalid Credentials!'
        })
      }
      //If all is good create a token and send to frontend
      let token = jwt.sign({ userId: user._id}, 'secretkey');
      return res.status(200).json({
        title: 'login sucess',
        token: token
      })
    })
  })
  
  //get user info
  app.get('/user', (req, res) => {
    let token = req.headers.token; 
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'got user',
          user: {
            email: user.email,
            password: user.password
          }
        })
      })
  
    })
  })
  

app.use("/api/book", require("./routes/router"));
app.use("/signup", require("./routes/userRoutes"));
app.use("/login", require("./routes/userRoutes"));

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('server running on port ' + port);
  })