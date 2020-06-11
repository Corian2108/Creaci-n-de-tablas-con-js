//Autor: Jeffo
//Tema: Crear una tabla desde js

class Heroe {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;

    }
}

var heroes = [
    new Heroe(1, "Bilbo", "Bolsón"),
    new Heroe(2, "Frodo", "Bolsón"),
    new Heroe(3, "Gandalf", "El mago Gris"),
    new Heroe(4, "Chapulín", "Colorado"),
    new Heroe(5, "Capitán", "Escudo"),
];

for (let i = 0; i < heroes.length; i++) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    
    td1.appendChild(document.createTextNode(heroes[i].id));
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(heroes[i].nombre));
    tr.appendChild(td2);

    var td3 = document.createElement('td');
    td3.appendChild(document.createTextNode(heroes[i].apellido));
    tr.appendChild(td3);

    tablaHeroes.appendChild(tr);
}
