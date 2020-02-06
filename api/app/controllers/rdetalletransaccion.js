'use strict';

var detail = require('../models/mdetalletransaccion.js');

exports.list_all_details = function(req, res) {
  detail.getAllDetails(function(err, detail) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', detail);
    res.send(detail);
  });
};



exports.create_a_detail = function(req, res) {
  var new_detail = new detail(req.body);

  //handles null error 
   if(!new_detail.FechaDetalle || !new_detail.Cantidad || !new_detail.Descuento || !new_detail.NroTransaccion || !new_detail.NroDocumento){

            res.status(400).send({ error:true, message: 'Please provide detail/status' });

        }
else{
  
  detail.createDetail(new_detail, function(err, detail) {
    
    if (err)
      res.send(err);
    res.json(detail);
  });
}
};


exports.read_a_detail = function(req, res) {
  detail.getDetailById(req.params.detailId, function(err, detail) {
    if (err)
      res.send(err);
    res.json(detail);
  });
};


