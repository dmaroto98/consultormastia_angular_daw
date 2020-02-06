'use strict';

var card = require('../models/mtarjetatia.js');

exports.list_all_cards = function(req, res) {
  card.getAllCards(function(err, card) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', card);
    res.send(card);
  });
};



exports.create_a_card = function(req, res) {
  var new_card = new card(req.body);

  //handles null error 
   if(!new_card.FechaEmision || !new_card.FechaModificacion || !new_card.TipoTarjeta || !new_card.Cedula || !new_card.NumeroTarjeta){

            res.status(400).send({ error:true, message: 'Please provide card/status' });

        }
else{
  
  card.createCard(new_card, function(err, card) {
    
    if (err)
      res.send(err);
    res.json(card);
  });
}
};


exports.read_a_card = function(req, res) {
  card.getCardById(req.params.cardId, function(err, card) {
    if (err)
      res.send(err);
    res.json(card);
  });
};


