const fs = require('fs');

//Part 1
try {
    let data = fs.readFileSync('./src/diagnosticReport.txt', 'utf8');
    let splitData = data.split('\n');
    let gamma = [];
    let epsilon = [];
    for(let i = 0; i < 12; i++) {
        let count = 0;
        for(let j = 0; j < splitData.length; j++) {
            let bits = splitData[j].split('');
            if(Number(bits[i]) === 0) {
                count++;
            };
        };
        if(Number(count) >= 500) { 
            gamma.push(0);
            epsilon.push(1);
        } else {
            gamma.push(1);
            epsilon.push(0);
        };
    };
    let gammaRate = parseInt(gamma.join(''), 2);
    let epsilonRate = parseInt(epsilon.join(''), 2);
    console.log(gammaRate * epsilonRate);
} catch (error) {
    console.log(`Error: ${error.stack}`);
};
