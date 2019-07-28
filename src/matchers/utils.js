import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

export default (matcher, messageCB) => {
  const passMessage = (actual, expected) => () => `
  ${matcherHint(`not.${matcher}`)}\n\n
  ${messageCB('not')}\n
    ${printExpected(expected)}\n
  received:
    ${printReceived(actual)}
  `;

  const failMessage = (actual, expected) => () => `
  ${matcherHint(`.${matcher}`)}\n\n
  ${messageCB('')}\n
    ${printExpected(expected)}\n
  received:
    ${printReceived(actual)}
  `;

  return { passMessage, failMessage };
};
