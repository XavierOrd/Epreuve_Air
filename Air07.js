/*
Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit



Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

const isolateString = (inputArray, inputString) => {
    let currentString = ""
    let findCharacter = false
	let outputArray = []
    for (let i = 0; i < inputArray.length; i++) {
        currentString = inputArray[i]
        findCharacter = false
        for (let j = 0; j < currentString.length; j++) {
            if (currentString[j].toLowerCase()===inputString.toLowerCase()) {
                findCharacter=true
                break;
            } 
        }
        if (!findCharacter) {
            outputArray.push(currentString)
        }
    }
	return (outputArray)
}

let inputArgs = process.argv.slice(2)
let lastElement = inputArgs.slice(-1) //dernier argument
let listOfSring = inputArgs.slice(0, -1) //du 1er à l'avant dernier élément
if (lastElement.length == 0 || listOfSring.length == 0) {
    console.log("Error")
} else {
    let finalArray = [] =  isolateString(listOfSring,lastElement[0])
    console.log(finalArray)
}

