"use strict";
/*
class Avenger{
    nombre:string;
    equipo:string;
    nombreReal: string;
    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string,equipo:string,
        nombreReal: string,
        puedePelear:boolean,
        peleasGanadas:number,){
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
        this.puedePelear=puedePelear;
        this.peleasGanadas = peleasGanadas;


    }
}

const antman = new Avenger('nestor','ElMejor','Choc',true,23);
console.log(antman);
*/
class Avenger {
    /*
    nombre:string;
    equipo:string;
    nombreReal: string;
    puedePelear:boolean;
    peleasGanadas:number;
    */
    constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
const antman = new Avenger('nestor', 'america');
console.log(antman);
