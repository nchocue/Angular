const retirarDinero = (montoRetirar:number):Promise<number>=>{
    let dineroActual =  1000;

    return new Promise((res,rej)=>{
        if(montoRetirar>dineroActual){
            rej('No hay suficiente saldo.');
        }else{
            dineroActual -= montoRetirar;
            res(dineroActual);
        }
    });
}

retirarDinero(1500).then(mes => console.log(mes))
.catch(console.warn)