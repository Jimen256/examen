
function matrizCuadrada(matriz){
    let Matriz = matriz.length
 for(let i=0; i<Matriz; i++){
        if(matriz[i].length!==Matriz){
         return false}
    }
    return true
} 
 
const matriz1 = [ 
    [7,20,4,9],
    [0,13,7],
    [24,16,32,8,7]
      
]
const matriz2=[
    [3,9,6],
    [1,3,8],
    [9,4,7]
]
console.log(matriz1)
console.log(matrizCuadrada(matriz1))
console.log(matrizCuadrada(matriz2))
