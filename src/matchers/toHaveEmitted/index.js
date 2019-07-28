import createMessages from '../utils';
import predicate from './predicate';

const toHaveEmitted = (actual, expected, payload) => {
  const pass = predicate(actual.emitted(), expected, payload);
  const { passMessage, failMessage } = createMessages('toHaveEmitted', value => `Expected wrapper ${value} to have emitted:`);

  return pass
    ? { pass, message: passMessage(actual, expected) }
    : { pass, message: failMessage(actual, expected) };
};

export default {
  toHaveEmitted,
  toHaveEmittedPayload: toHaveEmitted
};
