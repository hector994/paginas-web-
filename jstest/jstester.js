function myFunction() {
    let user1 = new Object(); // sintaxis de "constructor de objetos"
    let user2 = {};  // sintaxis de "objeto literal"

    alert(user1);
    alert(user2);

    let user3 = {     // un objeto
        name: "John",  // En la clave "name" se almacena el valor "John"
        age: 30        // En la clave "age" se almacena el valor 30
    };

    alert(user3.name); // John
    alert(user3.age); // 30

    user3.isAdmin = true;
    delete user3.age;

    alert(user3.name);
    alert(user3.age);
    alert(user3.isAdmin);


    let user4 = {
        name: "John",
        age: 30,
        "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
    };

    alert(user4.name);
    alert(user4.age);
    alert(user4["likes birds"]);

    let user5 = {
        name: "John",
        age: 30,
    }

    alert(user5.name);
    alert(user5.age);

    let user6 = {};
    // asignando
    user6["likes birds"] = true;
    // obteniendo
    alert(user6["likes birds"]); // true
    // eliminando
    delete user6["likes birds"];
    let key1 = "likes birds";
    // Tal cual: user["likes birds"] = true;
    user6[key1] = true;
    alert(user6.key1);


    let user7 = {
        name: "John",
        age: 30
    };
    let key2 = prompt("¿Qué te gustaría saber acerca del usuario?", "name");
    // acceso por medio de una variable
    alert(user7[key2]); // John (si se ingresara "name")


    let user8 = {
        name: "John",
        age: 30
    };
    let key3 = "name";
    alert(user8.key3) // undefined

    let fruit = prompt("¿Qué fruta comprar?", "Manzana");
    let bag = {
        [fruit]: "MANZNA", // El nombre de la propiedad se obtiene de la variable fruit
    };
    alert(bag.apple); // 5 si fruit es="apple"

}