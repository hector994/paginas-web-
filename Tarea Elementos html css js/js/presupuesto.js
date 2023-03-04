


document.writeln('<table>');

document.writeln('<tr>');
document.writeln('<th> cantidad asignada al HOspital </th>');
document.writeln('<td> $ <input type="text" name="ioy" id="asignado"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<th>Area</th>');
document.writeln('<th>Porcentage del presupuesto</th>');
document.writeln('<th>Valor asignado</th>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Psiquiatria</td>');
document.writeln('<td>50%</td>');
document.writeln('<td id="asign1"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Traumatologia</td>');
document.writeln('<td>20%</td>');
document.writeln('<td id="asign2"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Pediatria</td>');
document.writeln('<td>20%</td>');
document.writeln('<td id="asign3"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Emergencias</td>');
document.writeln('<td>10%</td>');
document.writeln('<td id="asign4"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td>Total</td>');
document.writeln('<td>100%</td>');
document.writeln('<td id="asign5"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td><button type="submit" onclick="calcular()"> Calcular </button></td>');
document.writeln('</tr>');


document.writeln('</table>');



function calcular() {
    var psiquiatria, traumatologia, pediatria, emergencias;

    psiquiatria = parseInt(document.getElementById("asignado").value) * 0.50;
    traumatologia = parseInt(document.getElementById("asignado").value) * 0.20;
    pediatria = parseInt(document.getElementById("asignado").value) * 0.20;
    emergencias = parseInt(document.getElementById("asignado").value) * 0.10;

    document.getElementById("asign1").innerHTML = '$ ' + psiquiatria;
    document.getElementById("asign2").innerHTML = '$ ' + traumatologia;
    document.getElementById("asign3").innerHTML = '$ ' + pediatria;
    document.getElementById("asign4").innerHTML = '$ ' + emergencias;
    document.getElementById("asign5").innerHTML = '$ ' + (psiquiatria + traumatologia+ pediatria + emergencias);
}