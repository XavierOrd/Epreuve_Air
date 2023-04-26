
const sorted_insert = (inputArray, inputNumber) => {
	let outputArray = inputArray
    let indice = -1
    for (let i = 0; i < inputArray.length; i++) {
       if (inputNumber<inputArray[i]) {
        indice = i
        break
       }
    }
    if (indice === -1) {
        outputArray.push(inputNumber)
    } else {
        outputArray.splice(indice,0,inputNumber)
    }
	return (outputArray)
};


let isValidInput = (inputParam) => {
    let allNumbers = false
    if (inputParam.length <= 1) {
        return false
    }
    //on contrôle d'avoir bien que des Nombres en paramètres
    allNumbers = inputParam.every(item => !isNaN(item));
    return allNumbers
};

let inputArgs = process.argv.slice(2)

if (!isValidInput(inputArgs)) {
    console.log("Error")
} else {

    let lastElement = inputArgs.slice(-1) //dernier argument
    let listOfNumber = inputArgs.slice(0, -1) //du 1er à l'avant dernier élément
    //convertion en entier des paramètres
    let newNumber = parseInt(lastElement[0])
    listOfNumber = listOfNumber.map(str => parseInt(str)); 
    //trie
    listOfNumber.sort() 

    let finalArray = [] =  sorted_insert(listOfNumber,newNumber)
    console.log(finalArray)
}

