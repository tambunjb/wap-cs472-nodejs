const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout,
});

const question1 = () => {
    readline.question('What is your name? ', name => {
        console.log(`Welcome ${name}`);
        question2();
    });
};

const question2 = () => {
    readline.question('How old are you? ', age => {
        if(age < 16)
            console.log(`You’re not allowed to drive in Iowa`);
        else console.log(`You’re allowed to get a drivers license in Iowa`);
        readline.close();
    });
};

question1();