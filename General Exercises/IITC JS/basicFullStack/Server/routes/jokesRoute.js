import express from 'express';
// import fs from 'fs';
import Joke from '../models/jokeModel.js';
import { getJoke, getJokes, getIdsByContent, addJoke, getJokesWithCreator } from '../controllers/jokesController.js';

const router = express.Router();


router.get('/byid/:id', getJoke, (req, res) =>{
    try{
        res.json(res.joke);
    }
    catch (error){
        next(error);
    }
});

router.get('/', getJokes, (req, res) => {
    try{
        res.json(res.body);
    }
    catch(error){
        next(error);
    }
});

router.get('/populate', getJokesWithCreator);

router.post('/single', addJoke);

router.post('/many', async (req, res) => {
    const { jokes } = req.body;
    try {
        const newJokes = await Joke.insertMany(jokes);
        res.status(200).json({ message: "post successfull", newJokes:newJokes});
    } catch (error){
        next(error);
    }
});

router.put('/:id', getJoke, async (req, res) => {
    if (req.body.setup != null) {
      res.joke.setup = req.body.setup;
    }
    if (req.body.punchline != null) {
      res.joke.punchline = req.body.punchline;
    }
    try {
      const updatedJoke = await res.joke.save();
      res.json(updatedJoke);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

router.delete('/byId/:id', getJoke, async (req, res) => {
    try {
        console.log(res.joke);
      await Joke.deleteOne({ _id: res.joke._id});
      res.json({ message: 'Deleted Joke' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.delete('/bycontent', getIdsByContent, async (req, res) =>{
    try{
        await Joke.deleteMany({ _id: { $in: res.jokeIds }});
        res.json( { message:"delete successful", ids: res.jokeIds });
    } catch (error){
        next(error);
    }
});

router.use((err, req, res, next) => {
    console.log("there was an error...");
    res.status(500).json({ message: "something went wrong in the server..."});
});

export default router;