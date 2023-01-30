#!/usr/bin/env node

import readlineSync from 'readline-sync';

const numberOfGames = 3
const maxRandomNumber = 100

const generateGameEven = () => {
  const randomNumber = Math.floor(Math.random() * maxRandomNumber);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const playGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < numberOfGames; i += 1) {
    const [question, rightAnswer] = generateGameEven();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      return false;
    }
    console.log('Correct!')
  }
  return true;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

if (playGame()) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`)
}
