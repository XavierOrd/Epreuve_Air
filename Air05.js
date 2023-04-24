
const oneAtATime = (inputSentence) => {
    let outputSentence = ""
    if (inputSentence==undefined) {
        return "Error"
    } 
    for (let i = 0; i < inputSentence.length; i++) {

        let currentCharac = inputSentence[i]
        let nextStart = i

        outputSentence += currentCharac

        for (let j = i + 1; j < inputSentence.length; j++) {
            if (inputSentence[j] !== currentCharac) {
                break
            } else {
                nextStart = j
            }
        }
        i = nextStart
    }
    return outputSentence
}

let mySentence = oneAtATime(process.argv.slice(2)[0])
console.log(mySentence)
