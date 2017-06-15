'use strict';
const api = require('express').Router();
const db = require('../db/models');


api.get('/hello', (req, res) => res.send({hello: 'world'}));

/* --- GET REQUESTS --- */


api.get('/pixels', (req, res, next) => {
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
  db.Pixel.update({
    name: req.body.name,
    image: req.body.image
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
