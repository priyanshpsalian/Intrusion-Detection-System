const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const port =5050
// enviourment variables
env.config();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require('./routes/user.routes');
const testRoutes = require('./routes/test.routes');

app.use('/public', express.static(path.join(__dirname, "uploads")));
app.use('/api', userRoutes)
app.use('/api', testRoutes)

// mongodb connection
const dburl =
  "mongodb+srv://tsecboys:tsec1234@djcluster.xhoiyij.mongodb.net/?retryWrites=true&w=majority";
const connectDB = (dburl) => {
    return mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }).then(() => {
        console.log('Database Connected');
    })
}

const start = async () => {
    try {
        await connectDB(dburl);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();