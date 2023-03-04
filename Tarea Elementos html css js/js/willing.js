

var MontototalAhorro = prompt('Ingrese el Monto de la cuenta de ahorro');

var hijo1, hijo2, hijo3;



document.writeln('<table>');

document.writeln('<tr>');
document.writeln('<th> cantidad asignada al HOspital </th>');
document.writeln('<td>' + "$ " + MontototalAhorro + '</td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<th>Hijos</th>');
document.writeln('<th>Porcentage heredado de 1 a 100</th>');
document.writeln('<th>Valor en dolares</th>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Hijo 1</td>');
document.writeln('<td><input type="text" name="por" id="porcentage1"></td>');
document.writeln('<td id="porce1"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Hijo 2</td>');
document.writeln('<td><input type="text" name="por" id="porcentage2"></td>');
document.writeln('<td id="porce2"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Hijo 3</td>');
document.writeln('<td><input type="text" name="por" id="porcentage3"></td>');
document.writeln('<td id="porce3"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Total</td>');
document.writeln('<td id="porce5"></td>');
document.writeln('<td id="porce4"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td><button type="submit" onclick="calcular()"> Calcular </button></td>');
document.writeln('</tr>');

document.writeln('</table>');

function calcular() {
    hijo1 = MontototalAhorro * parseInt(document.getElementById("porcentage1").value) / 100;
    hijo2 = MontototalAhorro * parseInt(document.getElementById("porcentage2").value) / 100;
    hijo3 = MontototalAhorro * parseInt(document.getElementById("porcentage3").value) / 100;

    document.getElementById("porce1").innerHTML = '$ ' + hijo1;
    document.getElementById("porce2").innerHTML = '$ ' + hijo2;
    document.getElementById("porce3").innerHTML = '$ ' + hijo3;
    document.getElementById("porce4").innerHTML = '$ ' + (hijo1 + hijo2 + hijo3);
    document.getElementById("porce5").innerHTML = parseInt(document.getElementById("porcentage1").value) +
        parseInt(document.getElementById("porcentage2").value) +
        parseInt(document.getElementById("porcentage3").value) + ' %';


}



