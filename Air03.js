//node Air03.js "je" "teste" "des" "trucs" " " 
const myConcat = (inputArray,inputSeparator) => {

    let myString = ""
    
    for (let i = 0; i < inputArray.length; i++) {
        if (i>0) {
            myString += inputSeparator
        }
        myString+=inputArray[i]
    }

    return myString
};

const displayMyConcat = (inputArgs) => {

    let listParam = process.argv.slice(2)
    let separator = listParam.slice(-1) //dernier argument
    let listofWords = listParam.slice(0,-1) //du 1er à l'avant dernier élément
    let mySentence = ""
    if ( separator.length==0 || listofWords.length <= 1) {
        console.log("Error")
        return false
    } else {
        mySentence = myConcat(listofWords, separator)
        console.log(mySentence)
    } 
};

displayMyConcat(process.argv.slice(2));