
const displayIntruder = (listParam) => {
    for (let i = 0; i < listParam.length; i++) {
        let currentIndex = i
        let currentCount=1
        for (let j = 0; j < listParam.length; j++) {
            if ( (currentIndex!==j) && ( listParam[currentIndex] === listParam[j] )  ) {
                currentCount++
            }
        }
        if (currentCount===1) {
            console.log(listParam[currentIndex])
        }
    }
};

displayIntruder(process.argv.slice(2))