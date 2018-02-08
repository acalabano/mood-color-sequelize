'use strict';
const api = require('express').Router();
const db = require('../db/models');


api.get('/hello', (req, res) => res.send({hello: 'world'}));

/* --- GET REQUESTS --- */

// I think these comments to separate HTTP verb requests is a nice touch.
// Helpful comments are always appreciated.
// Are you familiar with JSDOC?


api.get('/pixels', (req, res, next) => {
  console.log('WE GOT TO THE ROUTE')
  db.Pixel.findAll()
  .then(pixels => res.send(pixels))
  .catch(next);
});

api.get('/pixel/:id', (req, res, next) => {
  let pixel = req.params.id;
  let getPixel = db.Pixel.findById(pixel);

  Promise.all([getPixel])
  .then(result => res.send(result))
  .catch(next);
});



/* --- POST REQUESTS --- */


api.post('/pixels', (req, res, next) => {
  db.Pixel.create(req.body)
  .then(pixel => res.status(201).json(pixel))
  .catch(next);
});


/* --- PUT REQUESTS --- */


api.put('/pixel/:id', (req, res, next) => {
  let pixelId = req.params.id;
  console.log("We are getting to the api for /pixels")
  db.Pixel.update({
    color: req.body.color,
    day: req.body.day,
    content: req.body.content
  }, {
    where: {
      id: pixelId
    },
    returning: true,
    plain: true
  })
  .then(pixel => res.json(pixel[1]))
  .catch(next);
});


/* --- DELETE REQUESTS --- */

api.delete('/pixel/:id', (req, res, next) => {
  let pixelId = req.params.id;
  db.Pixel.destroy({
    where: {
      id: pixelId
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});


/* --- Error Handling --- */

api.use(function(err, req, res, next) {
  console.log(next);
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = api;
