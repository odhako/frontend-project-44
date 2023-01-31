const startMin = 10;
const startMax = 20;
const stepMin = 1;
const stepMax = 5;
const progressionLengthMin = 6;
const progressionLengthMax = 12;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const gameProgression = (numberOfGames) => {
  const rules = 'What number is missing in the progression?';
  const games = [];
  const gameContents = [rules, games];

  for (let i = 0; i < numberOfGames; i += 1) {
    const start = randomNumber(startMin, startMax);
    const step = randomNumber(stepMin, stepMax);
    const progressionLength = (randomNumber(progressionLengthMin, progressionLengthMax));
    const progression = [start];
    const missingNumberIndex = randomNumber(0, progressionLength - 1);

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression.at(-1) + step);
    }

    const rightAnswer = progression[missingNumberIndex].toString();
    progression[missingNumberIndex] = '..';
    const question = progression.join(' ');
    games.push([question, rightAnswer]);
  }

  return gameContents;
};

export default gameProgression;
