import express, {json} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import jokesRouter from './routes/jokesRoute.js';
import usersRouter from './routes/usersRoute.js';

import logger from './middleware/logger.js';

dotenv.config();

const uri = process.env.URI;

const app = express();

const PORT = 3000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected");
});

app.use(cors());
app.use(json());

app.use('/', logger);

// app.use(express.static('public'));

app.use('/api/jokes', jokesRouter);
app.use('/api/users', usersRouter);

app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render('index.html');
})

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is UP"
    })
})
  
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(jokes);
});