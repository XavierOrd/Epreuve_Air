/*
Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
    # your algo
    return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35

*/
let isValidInput = (inputArgs) => {
    
    let findFusion=false
    for (let index = 0; index < inputArgs.length; index++) {
        if (inputArgs[index].toUpperCase() !== "FUSION") {
           if (isNaN(inputArgs[index])) {
            return false
           }
        } else {
            findFusion = true
        }
    }
    if (!findFusion) {
        return false
    }

    return true
}

let triCroissant = (a, b) => {
    return a - b;
}

let sorted_fusion = (inputFirstArray, inputSecondArray) => {
    let fusionArray = inputFirstArray.concat(inputSecondArray) //fusion des deux tableaux
    fusionArray.sort(triCroissant) //trie complet
    return fusionArray
}

let inputProcess = (inputArgs) => {
    
    let globalArray = []
    let firstArray = []
    let secondArray = []

    //conversion de chaine en entier
    for (let index = 0; index < inputArgs.length; index++) {
        if (inputArgs[index].toUpperCase() !== "FUSION") {
            globalArray.push(parseInt(inputArgs[index]))
        } else {
            globalArray.push(inputArgs[index].toUpperCase())
        }
    }

    //on cherche le mot fusion et on sépare en deux tableaux
    //en suite on trie les deux tableaux
    indexOfFusion = globalArray.indexOf('FUSION')
    if (indexOfFusion != -1) {
        firstArray = globalArray.slice(0, indexOfFusion)
        secondArray = globalArray.slice(indexOfFusion + 1, globalArray.length)
        firstArray.sort(triCroissant)
        secondArray.sort(triCroissant)
    } else {
        console.log('error')
    }

    return [firstArray, secondArray];
}

if ( isValidInput(process.argv.slice(2)) ) {

    let [resultat1, resultat2] = inputProcess(process.argv.slice(2));
    let globalArray = sorted_fusion(resultat1,resultat2)
    console.log(globalArray)
} else {
    console.log('Error')
}

