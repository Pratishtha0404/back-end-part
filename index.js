const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/user');
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });



app.post('/signup',userController.signup )
app.post('/signin',userController.signin )
app.post('/send-otp',userController.sendotp )
app.post('/submit-otp',userController.submitotp )

app.listen(port, () => {
    console.log(`Backend running at port : ${port}`);
});
