function filaMasLarga(matriz){
    let fila = matriz[0]

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length>fila.length){
            fila = matriz[i]
        }
    }
    return fila
}

const fila1 = [
    [3,9,7,10,8],
    [2,16,3],
    [1,2,3,4,5,6,7]
]

console.log(filaMasLarga(fila1))


