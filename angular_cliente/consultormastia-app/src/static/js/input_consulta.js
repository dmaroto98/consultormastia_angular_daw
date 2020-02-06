
/*###############################################################  Validar el toque en el teclado  ##################################################################*/ 
$(document).on("click",function(e) {
                    
    var container = $("#write");
    var teclado=$("#keyboard");
                       
       if ((!container.is(e.target) && container.has(e.target).length === 0)&&(!teclado.is(e.target) && teclado.has(e.target).length === 0)) { 
          //alert("¡Pulsaste fuera!");     
          $("#keyboard").hide();  
       } else {
        $("#keyboard").show();
    }

});

  