
const avenger={
    nombre: 'Steve',
    clave: 'Capitán Amérca',
    poder: 'Volar'
}

/*
const {nombre, clave, poder} = avenger;
console.log(nombre);
console.log(clave);
*/
//console.log(poder);
//---destruturación
const extraer = ({nombre, poder}:any)=>{
   console.log(nombre);
   console.log(poder);
}

//extraer(avenger);

//---destruturación de arreglos
const avengerslist: string[] = ['Thor','Ironman','Spiderman'];
const [thor, iroman, spiderman] = avengerslist;
//const [, , spiderman] = avengerslist;
/*
console.log(avengerslist[0]);
console.log(avengerslist[1]);
console.log(avengerslist[2]);
*/
/*
console.log(thor);
console.log(iroman);
console.log(spiderman);
*/

const extraerArr = ([thor,Ironman, spiderman]:string[])=>{
    console.log(thor);
    console.log(Ironman);
    console.log(spiderman);
 }

 extraerArr(avengerslist);