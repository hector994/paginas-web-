function checaPositivoNegativo(){
    var num = parseInt(document.getElementById("num").value);
    var caso;
    document.getElementById("resultado").innerHTML= num + " es cero... ";
    if (num>0) {
        caso= 1;
    }else if (num<0) {
        caso= 2;
    }
    else if (num==0){
        caso=0;
    }

    switch (caso) {
        case 0:
            document.getElementById("resultado").innerHTML= num + " es cero... ";
            break;
        case 1:
            document.getElementById("resultado").innerHTML= num + " es positivo.. ";
            break;
        case 2:
            document.getElementById("resultado").innerHTML= num + " es negativo... ";
            break;
    
        default:
            document.getElementById("resultado").innerHTML= 'Campo vacio';
            document.getElementById("num").focus();
            break;
    }
}