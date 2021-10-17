const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri)
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


const realdataRouter = require('./routes/realdata');
const usersRouter = require('./routes/users');
const projectRouter = require('./routes/project');
const mlmodelRouter = require('./routes/mlmodel');

app.use('/realdata', realdataRouter);
app.use('/users', usersRouter);
app.use('/project', projectRouter);
app.use('/mlmodel', mlmodelRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});