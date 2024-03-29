import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateRound = () => {
  const step = getRandomNumber(1, 100);
  const resultProgression = [];
  const startNum = getRandomNumber(1, 1000);
  for (let i = 1; i <= progressionLength; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
