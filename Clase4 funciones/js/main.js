function aleatorio(min , max){
    return Math.floor(Math.random()*(max - min)*min);
}
function generarNumeros(){
    var elementos = document.getElementById('elementos');
    var elementos2 = document.getElementById('elementos2');
    var lista="";
    for (var index = 0; index < 10; index++) {
        lista += "<option>" + aleatorio(1,100) + "</option>";      
    }

    elementos.innerHTML = lista;
    elementos2.innerHTML = lista;
}