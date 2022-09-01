//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const numerosArray = [90, 10, 5, 9, 15, 18, 33, 58]
const strings = ["casa", "carro", "notebook"]
const terceiro = [0,  100, "dois", true, false]

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const numerosArrayCopia = numerosArray.slice()
numerosArrayCopia.push(88) 
    console.log(numerosArray, numerosArrayCopia)
    
//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
const stringsCopia = strings.slice()
stringsCopia.pop()
    console.log(strings, stringsCopia)

 //Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;   
const terceiroCopia = terceiro.slice()
terceiroCopia.splice(1,2)
    console.log(terceiro, terceiroCopia)