    function activar (quien:string,momento?:string,object:string ='batiseñal'){

        if(momento){
            console.log(`${quien} activo la ${object} en la ${momento}`);
        }
        else{
            console.log(`${quien} activo la ${object}`);
        }
    }
 
    activar('Gordon','mañana');