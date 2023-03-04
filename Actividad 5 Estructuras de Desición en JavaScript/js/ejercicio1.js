function ordenarNumeros() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var array = [num1, num2, num3];

    // for (i = 0; i < array.length; i++){
    // document.writeln((i+1) + ": " + array[i]);
    // }

    function Insercion(arreglo) {
        var x, j;
        for (var i = 1; i <= arreglo.length - 1; i++) {
            x = arreglo[i];
            j = i - 1;
            while (j >= 0 && x < arreglo[j]) {
                arreglo[j + 1] = arreglo[j];
                j--;
            }
            arreglo[j + 1] = x;
        }
        return arreglo;
    }

    Insercion(array);
    // var arr = Insercion(array);
    // document.getElementById("resultado").innerHTML = JSON.stringify(array, null, 2);
   

    for (let i = 0; i < array.length; i++) {
        document.getElementById("resultado").innerHTML = "";
    }

    if (isNaN(parseFloat(document.getElementById("num1").value))) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'> Porfavor ingresa el primer digito</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
    }
    else if (isNaN(parseFloat(document.getElementById("num2").value))) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'> Porfavor ingresa el segundo digito</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else if (isNaN(parseFloat(document.getElementById("num3").value))) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'> Porfavor ingresa el tercer digito</span>";
        document.getElementById("num3").innerText = "0";
        document.getElementById("num3").focus();
    } else {
        alert("ordenados ascendentemente " + JSON.stringify(array, null, 2));
        for (let i = 0; i < array.length; i++) {
            document.getElementById("resultado").innerHTML += "numero-" + (i + 1) + " = " + array[i] + "<br>";
        }
    }

}