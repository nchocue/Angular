const sumar =(a:number, b:number):number =>{
    return a+b;
}

const nombre = ():string=>'Hola Nestor';

const obtenerSalario = ():Promise<string> =>{

    return new Promise((resolve,reject)=>{
        resolve('1');
    });
}

obtenerSalario().then(a=>console.log(a.toUpperCase()));