'user strict';
var sql = require('./db.js');

//Category object constructor
var Category = function(category){
    this.DescripcionCategoria = category.DescripcionCategoria;
    this.NroProductos = category.NroProductos;
    this.Categoria = category.Categoria;
	this.Categoriaid = category.Categoriaid;
};
Category.createCategory = function (newCategory, result) {    
        sql.query("INSERT INTO admintia_categoria set ?", newCategory, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Category.getCategoryById = function (CategoryId, result) {
        sql.query("Select Categoria from admintia_categoria where Categoriaid = ? ", CategoryId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Category.getAllCategories = function (result) {
        sql.query("Select * from admintia_categoria", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Categoria : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Category;