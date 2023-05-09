let ma_rotation = (inputArgs) => {

    for (let index = 0; index < inputArgs.length - 1; index++) {

        let nextArgs = inputArgs[index + 1]
        inputArgs[index + 1] = inputArgs[index]
        inputArgs[index] = nextArgs
    }
    return inputArgs
};

let outputArgs = ma_rotation(process.argv.slice(2))
console.log(outputArgs)