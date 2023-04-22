/*
bonjour	les 
gars .

*/

let addStringIntoArray = (inputArray, inputString) => {
    if (inputString !== "") {
        inputArray.push(inputString)
        inputString = ""
    }
    return inputString
}

let mySplit = (inputArray) => {

    let inputParam = inputArray[0]
    let outputArray = []
    let cumulString = ""

    if (inputParam==undefined) {
        console.log("Error")
    } else {
        for (let index = 0; index < inputParam.length; index++) {

            myString = inputParam[index]
    
            if ((myString.indexOf(" ") !== -1) || (myString.indexOf("\n") !== -1) || (myString.indexOf("\t") !== -1)) {
                cumulString = addStringIntoArray(outputArray, cumulString)
            } else {
                cumulString += inputParam[index]
            }
    
        }
        cumulString = addStringIntoArray(outputArray, cumulString)
    }
    
    return outputArray
}

let displayMySplit = (inputArgs) => {

    let arraySplit = [] = mySplit(inputArgs)

    for (let i = 0; i < arraySplit.length; i++) {
        console.log(arraySplit[i])
    }

}

displayMySplit(process.argv.slice(2))