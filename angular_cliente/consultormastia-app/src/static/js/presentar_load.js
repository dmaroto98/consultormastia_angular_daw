function loadData() {
    var currentUrl = document.URL;
    var puntos = document.getElementById("puntos_value").textContent;
    var tiene_premios = false;
    console.log("Tienes" + puntos + "Puntos!")


    if (puntos == 0) {
        document.getElementById("NPremios").style.display = "none";
        document.getElementById("YPremios").style.display = "none";
    }
    else {
        var puntosInt = parseInt(puntos);
        if (puntosInt > 0)
        {

            fetch("/data/premios.xml")
                .then(function (resultado)
                {
                    return resultado.text()
                })
                .then(function (str)
                {
                    var parser = new DOMParser()
                    var xml = parser.parseFromString(str, "text/xml");

                    console.log("ENTR")
                    //Documento Parseado
                    var arrayPuntos = xml.getElementsByTagName("puntos");
                    console.log(arrayPuntos.length)
                    for (var i = 0; i < arrayPuntos.length; i ++)
                    {
                        console.log(parseInt(arrayPuntos[i].textContent))
                        if (parseInt(arrayPuntos[i].textContent) < puntosInt)
                        {
                            console.log("Voy a mostrar puntos")
                            tiene_premios = true;
                            break;
                        }
                    }

                    //Determinamos si hay premios
            if (tiene_premios == false)
            {
                console.log("Pues no hay puntos")
                document.getElementById("NPuntos").style.display = "none";
                document.getElementById("YPremios").style.display = "none";
            }
            else
            {
                console.log("Else Final")
                document.getElementById("NPuntos").style.display = "none";
                document.getElementById("NPremios").style.display = "none";


                fetch("/data/premios.xml")
                .then(function (resultado) {
                    return resultado.text()
                })
                .then(function (str)
                {
                    var parser = new DOMParser()
                    var xml = parser.parseFromString(str, "text/xml");

                    console.log("Si hay premios!!!!\n")
                    //Documento Parseado
                    var arrayPremios = xml.getElementsByTagName("premio");
                    //Extraemos datos de premio 1 para caratula
                    var primerPremio = arrayPremios[0].getElementsByTagName("ruta")[0];
                    var ruta = "/static/img/premios/"+primerPremio.textContent;
                    var caratula = document.getElementById("carousel_caratula");
                    caratula.setAttribute("src",ruta);


                    //Agregamos texto
                    var puntos_carat = arrayPremios[0].getElementsByTagName("puntos")[0].textContent;
                    var precio_carat = parseFloat(arrayPremios[0].getElementsByTagName("precio")[0].textContent);


                    if(precio_carat > 0.0)
                    {
                        var divCaratula = document.getElementById("carousel_caratula_pts_dollars");
                        divCaratula.style.display = "block";
                        var spanCaratula = divCaratula.getElementsByTagName("span")[0];
                        spanCaratula.innerText = puntos_carat + " " + "$"+precio_carat+"pts";
                    }
                    else
                    {
                        var divCaratula = document.getElementById("carousel_caratula_pts");
                        divCaratula.style.display = "block";
                        var spanCaratula = divCaratula.getElementsByTagName("span")[0];
                        spanCaratula.innerText = puntos_carat;

                    }

                    //Comenzamos a crear los n premios



                    for (var i = 1; i < 5; i ++)
                    {

                        var ruta_actual = "/static/img/premios/"+arrayPremios[i].getElementsByTagName("ruta")[0].textContent;
                        var puntos_actual = arrayPremios[i].getElementsByTagName("puntos")[0].textContent;
                        var precio_actual = parseFloat(arrayPremios[i].getElementsByTagName("precio")[0].textContent);



                        var divPremio = $("<div>");
                        divPremio.attr("class","item")


                        var divPremioCol = $("<div>");
                        divPremioCol.attr("class","col-xs-4");
                        //Donde ira la imagen del carousel
                        var divPremioRow = $("<div>");
                        divPremioRow.attr("class","row");
                        divPremioRow.css("margin","0% 0% 0% 0%");


                        var divImgCol = $("<div>");
                        divImgCol.attr("class","col-md-3");
                        divImgCol.css("margin","0% 0% 0% 0%");


                        var aImg = $("<a>");
                        var img = $("<img>");
                        img.attr("src",ruta_actual);
                        img.attr("class","containerImg imageStyle");
                        //Enlazamos las etiquetas
                        aImg.append(img);
                        divImgCol.append(aImg);
                        divPremioRow.append(divImgCol);
                        divPremioCol.append(divPremioRow);


                        //Donde ira la etiqueta a mostrar sobre el div
                        var divPremioRowLabel = $("<div>");
                        divPremioRowLabel.attr("class","row");
                        divPremioRowLabel.css("margin","0% 0% 0% 0%");
                        if(precio_actual > 0.0)
                        {

                            var divItem = $("<div>");
                            divItem.attr("class","col-md-8");
                            divItem.css("margin","-4.8% 0% 0% 32%");
                            var spanItem = $("<div>");
                            spanItem.attr("class","pointsStyle");
                            spanItem.css("font-family","pt_sans_narrowbold', Arial, sans-serif");
                            spanItem.css("font-weight","350");
                            spanItem.css("font-size","22pt");
                            spanItem.css("color","white");
                            spanItem.text(puntos_actual + "pts " + "$" + precio_actual);
                            //Enlazamos
                            divItem.append(spanItem);
                            divPremioRowLabel.append(divItem);
                            console.log(divPremioRowLabel);
                            divPremioCol.append(divPremioRowLabel);

                        }
                        else
                        {

                        }

                        divPremio.append(divPremioCol);
                        //Agregamos divPremio en el container del carousel
                        console.log("Div Final")
                        console.log(divPremio[0])
                        var contenedorFinal = document.getElementById("carousel_premios_container");
                        contenedorFinal.appendChild(divPremio[0]);
                        console.log(contenedorFinal)








                    }
                    //Agregamos divPremio en el container del carousel
                    console.log("AJA BUM PUM!!!!!")
                    $('.multi-item-carousel').carousel({
                    interval: false
                    });

                    // for every slide in carousel, copy the next slide's item in the slide.
                    // Do the same for the next, next item.
                    $('.multi-item-carousel .item').each(function()
                    {
                    var next = $(this).next();
                    console.log(next)
                    if (!next.length) {
                        next = $(this).siblings(':first');
                        console.log(next)
                    }
                    next.children(':first-child').clone().appendTo($(this));

                    if (next.next().length>0) {
                        next.next().children(':first-child').clone().appendTo($(this));
                    } else {
                        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                    }
                    });

                })
                .catch(function (error) {
                    console.log('Hubo un problema con la petición Fetch:' + error.message);
                });
            }



                })
                .catch(function (error) {
                    console.log('Hubo un problema con la petición Fetch:' + error.message);
                });

        }


    }
}



document.addEventListener('DOMContentLoaded', function () {
    loadData()

})
