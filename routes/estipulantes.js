const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {

knex.select().from('estipulantes').then(e => res.json(e)).catch(e => res.send(e))
  res.send('index', { title: 'Express' });
});

module.exports = router;
// knex.select().from('contratospj').then(e => console.log(e)).catch(e => console.log(e))
// knex.select().from('usuarios').then(e => console.log(e)).catch(e => console.log(e))