let printFile = (inputFile) => {

    filePath = inputFile[0]
    if (filePath === undefined) {
        console.log("Error")
    } else {
        const fs = require('fs');
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            console.log(data);
        } catch (error) {
            console.error('error')
        }
    }
};

printFile(process.argv.slice(2))

