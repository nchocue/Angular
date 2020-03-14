"use strict";
const sumar = (a, b) => {
    return a + b;
};
const nombre = () => 'Hola Nestor';
const obtenerSalario = () => {
    return new Promise((resolve, reject) => {
        resolve('1');
    });
};
obtenerSalario().then(a => console.log(a.toUpperCase()));
