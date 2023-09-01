function filtrarNumeros(array){
    return array >= 6;
}
const array = [1,5,7,8,3,6,7,9]

const filtrar = array.filter(filtrarNumeros);

console.log(array)
console.log(filtrar)