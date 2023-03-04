document.writeln('<table>');

document.writeln('<tr>');
document.writeln('<th> tablas de multiplicar de N= </th>');
document.writeln('<td> $ <input type="text" name="ioy" id="asignado"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<th>N</th>');
document.writeln('<th>1...10=</th>');
document.writeln('<th>Respuestas</th>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td id="Numero1"></td>');
document.writeln('<td>*1=</td>');
document.writeln('<td id="asign1"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero2"></td>');
document.writeln('<td>*2=</td>');
document.writeln('<td id="asign2"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero3"></td>');
document.writeln('<td>*3=</td>');
document.writeln('<td id="asign3"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero4"></td>');
document.writeln('<td>*4=</td>');
document.writeln('<td id="asign4"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero5"></td>');
document.writeln('<td>*5=</td>');
document.writeln('<td id="asign5"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero6"></td>');
document.writeln('<td>*6=</td>');
document.writeln('<td id="asign6"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero7"></td>');
document.writeln('<td>*7=</td>');
document.writeln('<td id="asign7"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero8"></td>');
document.writeln('<td>*8=</td>');
document.writeln('<td id="asign8"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero9"></td>');
document.writeln('<td>*9=</td>');
document.writeln('<td id="asign9"></td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td id="Numero10"></td>');
document.writeln('<td>*10=</td>');
document.writeln('<td id="asign10"></td>');
document.writeln('</tr>');

document.writeln('<tr>');
document.writeln('<td><button type="submit" onclick="calcular()"> Calcular </button></td>');
document.writeln('</tr>');


document.writeln('</table>');



function calcular() {

    var tabla = parseInt(document.getElementById("asignado").value);


    document.getElementById("Numero1").innerHTML =  tabla;
    document.getElementById("Numero2").innerHTML =  tabla;
    document.getElementById("Numero3").innerHTML =  tabla;
    document.getElementById("Numero4").innerHTML =  tabla;
    document.getElementById("Numero5").innerHTML =  tabla;
    document.getElementById("Numero6").innerHTML =  tabla;
    document.getElementById("Numero7").innerHTML =  tabla;
    document.getElementById("Numero8").innerHTML =  tabla;
    document.getElementById("Numero9").innerHTML =  tabla;
    document.getElementById("Numero10").innerHTML =  tabla;


    document.getElementById("asign1").innerHTML = tabla * 1;
    document.getElementById("asign2").innerHTML = tabla * 2;
    document.getElementById("asign3").innerHTML = tabla * 3;
    document.getElementById("asign4").innerHTML = tabla * 4;
    document.getElementById("asign5").innerHTML = tabla * 5;
    document.getElementById("asign6").innerHTML = tabla * 6;
    document.getElementById("asign7").innerHTML = tabla * 7;
    document.getElementById("asign8").innerHTML = tabla * 8;
    document.getElementById("asign9").innerHTML = tabla * 9;
    document.getElementById("asign10").innerHTML = tabla * 10;
 
}