

function change(elemento){
  var valor  = elemento.value
  if (valor == "real") {
    document.getElementById("tipo").innerHTML = "insira o valor em real"
}else if (valor == "dolar"){ 
    document.getElementById("tipo").innerHTML = "insira o valor em dolar"
}else if (valor == "euro"){ 
    document.getElementById("tipo").innerHTML = "insira o valor em euro"
}else if (valor == "libra") {
    document.getElementById("tipo").innerHTML = "insira o valor em libra" 
  }
}


function ConverterReal() {
    var tipo = document.getElementById("tipo").innerText
    if (tipo.indexOf("real") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorReal = valorNumerico  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de R$ " + valorReal.toFixed(2)
    }
    else if (tipo.indexOf("dolar") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valordolar = valorNumerico * 5;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de R$ " + valordolar.toFixed(2)
    }
    else if (tipo.indexOf("euro") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorEuro = valorNumerico * 6.250 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de R$ " + valorEuro.toFixed(2)
    }
    else if (tipo.indexOf("libra") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorLibra = valorNumerico * 7.253  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de R$ " + valorLibra.toFixed(2)
    } 

} 

function ConverterDolar(){

    var tipo = document.getElementById("tipo").innerText

    if (tipo.indexOf("real") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorReal = valorNumerico * 0.187 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de $ " + valorReal.toFixed(2)
    }
    else if (tipo.indexOf("dolar") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valordolar = valorNumerico  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de $ " + valordolar.toFixed(2)
    }
    else if (tipo.indexOf("euro") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorEuro = valorNumerico * 1.171 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de $ " + valorEuro.toFixed(2)
    }
    else if (tipo.indexOf("libra") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorLibra = valorNumerico * 1.366  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de $ " + valorLibra.toFixed(2)
    }

}


function ConverterLibra(){
    var tipo = document.getElementById("tipo").innerText
    if (tipo.indexOf("real") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorReal = valorNumerico * 0.14 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de £ " + valorReal.toFixed(2)
    }
    else if (tipo.indexOf("dolar") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valordolar = valorNumerico  * 0.724 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de £ " + valordolar.toFixed(2)
    }
    else if (tipo.indexOf("euro") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorEuro = valorNumerico * 0.85  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de £ " + valorEuro.toFixed(2)
    }
    else if (tipo.indexOf("libra") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorLibra = valorNumerico   ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de £ " + valorLibra.toFixed(2)
    }
}

function ConverterEuro(){
   var tipo = document.getElementById("tipo").innerText

    if (tipo.indexOf("real") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorReal = valorNumerico * 0.160 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de € " + valorReal.toFixed(2)
    }
    else if (tipo.indexOf("dolar") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valordolar = valorNumerico  * 0.854 ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de € " + valordolar.toFixed(2)
    }
    else if (tipo.indexOf("euro") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorEuro = valorNumerico  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de € " + valorEuro.toFixed(2)
    }
    else if (tipo.indexOf("libra") != -1){
        var valorElemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(valorElemento);
        var  valorLibra = valorNumerico * 1.1662  ;
        document.getElementById("valorConvertido").innerHTML = "valor convertido e de € " + valorLibra.toFixed(2)
    }
}



