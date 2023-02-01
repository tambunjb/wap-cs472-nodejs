const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const numbers = [];

const getNumber = (number) => {
    if(number.trim() === 'stop') {
        console.log(`Sum of your numbers is ${numbers.reduce((i, j) => i+j, 0)}`);
        readline.close();
    }
    else if(!isNaN(Number(number.trim()))) {
        numbers.push(Number(number.trim()));
        askNumber();
    }
};

const askNumber = () => {
    readline.question('What is your number? ', getNumber);
};

askNumber();