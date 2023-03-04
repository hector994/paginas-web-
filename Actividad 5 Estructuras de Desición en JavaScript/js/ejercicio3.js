function checaPromo(){
    var baguetti = parseInt(document.getElementById("baguetti").value);

    var caso ;

    if (baguetti==20) {
        caso=1;
    } else if (baguetti>=16 && baguetti<=19) {
        caso=2;
    }else if (baguetti>20) {
        caso=3
    }else if (baguetti>=6 && baguetti<=15) {
        caso=4;
    }else if (baguetti < 6) {
        caso = 0;
    }

    switch (caso) {
        case 0:
            var precio = baguetti*1.15;
            var descuento = precio * 0 /100;
            var total = precio - descuento;
            document.getElementById("total").innerHTML = "Precio: "+ precio +"<br>" +"Descuento: " + descuento +"<br>" + "Total: "+ total+"<br>"+ "Cortesia: "+ "-";   
            break;
        case 1:
            var precio = baguetti*1.15;
            var descuento = precio * 20 /100;
            var total = precio - descuento;
            document.getElementById("total").innerHTML = "Precio: "+ precio +"<br>" +"Descuento: " + descuento +"<br>" + "Total: "+ total+"<br>"+ "Cortesia: "+ "1 Latte";   
            break;
        case 2:
            var precio = baguetti*1.15;
            var descuento = precio * 15 /100;
            var total = precio - descuento;
            document.getElementById("total").innerHTML = "Precio: "+ precio +"<br>" +"Descuento: " + descuento +"<br>" + "Total: "+ total+"<br>"+ "Cortesia: "+ "1 Latte";   
            break;
        case 3:
            var precio = baguetti*1.15;
            var descuento = precio * 25 /100;
            var total = precio - descuento;
            document.getElementById("total").innerHTML = "Precio: "+ precio +"<br>" +"Descuento: " + descuento +"<br>" + "Total: "+ total+"<br>"+ "Cortesia: "+ "1 Latte";   
            break;
        case 4:
            var precio = baguetti*1.15;
            var descuento = precio * 10 /100;
            var total = precio - descuento;
            document.getElementById("total").innerHTML = "Precio: "+ precio +"<br>" +"Descuento: " + descuento +"<br>" + "Total: "+ total+"<br>"+ "Cortesia: "+ "1 Latte";   
            break;
        default:
            break;
    }

}