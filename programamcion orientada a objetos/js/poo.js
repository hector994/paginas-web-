const album1 = {
    nombre: 'the bitter truth',
    id: 01,
    reproducir(){
        return `reproduciendo album ${this.nombre}`
    }

}

const album2 = {
    nombre: 'Numb',
    id: 02,
    reproducir(){
        return `reproduciendo album ${this.nombre}`
    }

}

console.log(album1.reproducir());
console.log(album2.reproducir());

class album0 {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `reproduciendo album ${this.nombre}`
    }
}

//intanciar

const alb1 = new album0('me gustas tu',03);
const alb2 = new album0('Pura playa',04);

console.log(alb1.reproducir());
console.log(alb2.reproducir());

class podcast extends album0{
    constructor(nombre, id, capitulo){
        super(nombre, id);
        this.capitulo = capitulo;
    }

    reproducirPodcast(){
        return `reproduciendo podcast: ${this.nombre} capitulo: ${this.capitulo}`
    }

}

const podc1 = new podcast('duo',05,1);
const podc2 = new podcast('disney',05,2);

console.log(podc1.reproducirPodcast());
console.log(podc2.reproducirPodcast());


class anuncios extends album0{
    constructor(nombre, id, marca){
        super(nombre, id);
        this.marca = marca;
    }

    reproducirAnuncio(){
        return `reproduciendo anuncio: ${this.nombre} marca: ${this.marca}`;
    }

}

const anun1 = new anuncios('colagate', 6, 'colgate');
const anun2 = new anuncios('leche', 6, 'salu');

console.log(anun1.reproducirAnuncio());
console.log(anun2.reproducirAnuncio());