function mayorNum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 && num2) {
        if (num1 >= num2) {
            if (num1 == num2) {
                alert("Ambos son iguales");
            }
            else{
                alert("El mayor es el: " + num1);
            }
        }
        else{
            alert("El mayor es el:" + num2);
        }
    } else {
        alert("No se relleno uno de los campos...");
    }
}

function operaciones(opciones){    
    var opcion = {
        suma:  function sumaNums(n1, n2){
            return( parseInt(n1) + parseInt(n2));
        },
        resta:  function restaNums(n1, n2){
            return( parseInt(n1) - parseInt(n2));
        },
        multiplica:  function multiplicaNums(n1, n2){
            return( parseInt(n1) * parseInt(n2));
        },
        divide:  function divideNums(n1, n2){
            return( parseInt(n1) / parseInt(n2));
        }
    }

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(parseFloat(document.getElementById("num1").value))) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'> Porfavor ingresa el primer digito</span>";
        document.getElementById("num1").innerText="0";
        document.getElementById("num1").focus();
    }
    else if (isNaN(parseFloat(document.getElementById("num2").value))) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'> Porfavor ingresa el segundo digito</span>";
        document.getElementById("num2").innerText="0";
        document.getElementById("num2").focus();
    }
    else{
        switch (opciones) {
            case "suma":
                var resultado = opcion.suma(num1,num2);
                document.getElementById("resultado").innerHTML="<span style='color:green;'>"+ resultado +"</span>";
                break;
            case "resta":
                var resultado = opcion.resta(num1,num2);
                document.getElementById("resultado").innerHTML="<span style='color:green;'>"+ resultado +"</span>";
                break;
            case "multiplica":
                var resultado = opcion.multiplica(num1,num2);
                document.getElementById("resultado").innerHTML="<span style='color: green;'>"+ resultado +"</span>";
                break;
            case "divide":
                var resultado = opcion.divide(num1,num2);
                document.getElementById("resultado").innerHTML="<span style='color: green;'>"+ resultado +"</span>";
                break;
        
            default:
                document.getElementById("resultado").innerHTML = "<span style='color: red;'>eror</span>";
                break;
        }
    }

}