const calcAndDisplayResult = (inputArgs) => {

    let lastElement = inputArgs.slice(-1) //dernier argument
    let listOfNumbers = inputArgs.slice(0, -1) //du 1er à l'avant dernier élément
    let operand = 0
    let operator = ""

    if (lastElement.length == 0 || listOfNumbers.length == 0) {
        console.log("Error")
    } else {

        operand = parseInt(lastElement)
        if (operand < 0) {
            operator = "MOINS"
        } else {
            operator = "PLUS"
        }
        operand = Math.abs(operand)

        for (let i = 0; i < listOfNumbers.length; i++) {
            let myNumber = parseInt(listOfNumbers[i]);
            switch (operator) {
                case "PLUS":
                    myNumber += operand
                    break;
                case "MOINS":
                    myNumber -= operand
                    break;
            }
            listOfNumbers[i] = myNumber
        }

        console.log(listOfNumbers)
    }
};

calcAndDisplayResult(process.argv.slice(2))




