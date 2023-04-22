let addStringIntoArray = (inputArray, inputString) => {
    if (inputString !== "") {
        inputArray.push(inputString)
        inputString = ""
    }
    return inputString
}

let extractString = (inputString, indexStart, indexEnd) => {
    let cumul=""
    for (let pos = indexStart; pos < indexEnd; pos++) {
        cumul+=inputString[pos]
    }
    return cumul
}

let mySplit = (inputSentence,inputSeparator) => {

    
    let outputArray = []
    let cumulString = ""
    let totalLength = 0
    let findSeparator=true;
    let indexOfSeparator=0
    let previousIndex=0

    if ( inputSentence==undefined || inputSeparator==undefined )  {

        console.log("Error")

    } else {

        totalLength = inputSentence.length

        while(findSeparator) {

            indexOfSeparator = inputSentence.indexOf(inputSeparator,previousIndex)
            cumulString=""

            if (indexOfSeparator!==-1) {

                cumulString = extractString(inputSentence,previousIndex,indexOfSeparator)
                previousIndex=(indexOfSeparator+inputSeparator.length)

            } else {

                findSeparator = false;
                //on récupère la fin si on ne trouve plus de séparateur
                if (previousIndex<totalLength) {
                    cumulString = extractString(inputSentence,previousIndex,totalLength)
                }

            }

            addStringIntoArray(outputArray,cumulString)

        }
    }
   return outputArray
}

let displayMySplit = (inputArgs) => {

    let arraySplit = [] = mySplit(inputArgs[0],inputArgs[1])

    for (let i = 0; i < arraySplit.length; i++) {
        console.log(arraySplit[i])
    }

}

displayMySplit(process.argv.slice(2)) 
