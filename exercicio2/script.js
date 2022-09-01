//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const numerosArray = [90, 10, 5, 9, 15, 18, 33, 58]
const strings = ["casa", "carro", "notebook"]
const terceiro = [0,  1, "dois", true, false]

console.log ("Será impresso aqui os Arrays:", numerosArray)
console.log ("Será impresso aqui os Arrays:", strings)
console.log ("Será impresso aqui os Arrays:", terceiro)

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
    console.log(numerosArray.length)
    console.log(strings.length)
    console.log(terceiro.length)
    
 //Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
    console.log(numerosArray[0], strings[1], terceiro[2])
 
 // Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
    console.log(numerosArray.includes(90))
    console.log(terceiro.includes(50))
