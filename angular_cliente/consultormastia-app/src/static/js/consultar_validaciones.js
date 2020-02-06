


$(document).ready(function(){
  $( "#form_id" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
  
    var boton_rut;
    
    boton_rut = $('#btn_buscar');
    
    boton_rut.on('click', function()
    {
      
      //$('#form_id').submit();
      
    }); 
    
  });
  