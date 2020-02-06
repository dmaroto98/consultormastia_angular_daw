'use strict';

var category = require('../models/mcategoria.js');

exports.list_all_category = function(req, res) {
  category.getAllCategories(function(err, category) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', category);
    res.send(category);
  });
};



exports.create_a_category = function(req, res) {
  var new_category = new category(req.body);

  //handles null error 
   if(!new_category.DescripcionCategoria || !new_category.NroProductos || !new_category.Categoria || !new_category.Categoriaid){

            res.status(400).send({ error:true, message: 'Please provide category/status' });

        }
else{
  
  category.createCategory(new_category, function(err, category) {
    
    if (err)
      res.send(err);
    res.json(category);
  });
}
};


exports.read_a_category = function(req, res) {
  category.getCategoryById(req.params.categoryId, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


