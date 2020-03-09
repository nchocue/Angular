//promesas introduccion
console.log('Inicio');
const prom1 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            //resolve('Se termino el timeout');
            reject('Se termino el timeout');
        },1000);
    }
);

prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));
console.log('fin');