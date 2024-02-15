import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
