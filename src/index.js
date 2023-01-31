import readlineSync from 'readline-sync';

const gameEngine = (game) => {
    const numberOfGames = 3
    const maxRandomNumber = 100

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const [rules, questions] = game(numberOfGames, maxRandomNumber);
    console.log(rules);

    for (const [question, rightAnswer] of questions) {
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer !== rightAnswer) {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
          console.log(`Let's try again, ${name}!`)
          return false;
        }
        console.log('Correct!')
    }

    console.log(`Congratulations, ${name}!`);
    return true;
};

export default gameEngine;
