import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

export default (matcher: string, messageCB: (arg: string) => string) => {
  const passMessage = (actual: any, expected: any) => () =>
    `
  ${matcherHint(`not.${matcher}`)}\n\n
  ${messageCB('not')}\n
    ${printExpected(expected)}\n
  received:
    ${printReceived(actual)}
  `;

  const failMessage = (actual: any, expected: any) => () =>
    `
  ${matcherHint(`.${matcher}`)}\n\n
  ${messageCB('')}\n
    ${printExpected(expected)}\n
  received:
    ${printReceived(actual)}
  `;

  return { passMessage, failMessage };
};
