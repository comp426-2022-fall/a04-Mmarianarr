#!/usr/bin/env node

import {roll} from "./lib/roll.js";
import express from "express";


let app = express();

import minimist from "minimist";


const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));


app.get('/app/', (req, res) => {
    res.send('200 OK')
    res.end;
});


app.get('/app/roll/', (req, res) => {
    let sides = 6;
    let dice = 2;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
});

app.post('/app/roll/', (req, res) => {
    let sides = 6 || req.body.sides;
    let dice = 2 || req.body.dice ;
    let rolls =  1 || req.body.rolls;
    res.send(roll(sides, dice, rolls));
    res.end;
});

app.get('/app/roll/:sides/', (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = 2;
    const rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
});


app.get('/app/roll/:sides/:dice/', (req, res)=> {
    const sides = req.params.sides;
    const dice = req.params.dice;
    res.send(roll(sides, dice, 1));
    res.end
});


app.get('/app/roll/:sides/:dice/:rolls', (req, res)=> {
    let sides = req.params.sides;
    let dice = req.params.dice;
    let rolls = req.params.rolls
    res.send(roll(sides, dice, rolls));
    res.end
});


app.get('*', (req, res) => {
    console.error('error encountered');
    res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}\n`)
});
