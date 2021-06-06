import { Wrapper } from '@vue/test-utils';
import createMessages from '../utils';
import predicate from './predicate';

const unwrap = (wrap: any[][] | undefined): any => (wrap ? wrap[0][0] : '');

const toHaveEmitted = (actual: Wrapper<any>, expected: string, payload?: any) => {
  const pass = predicate(actual.emitted(), expected, payload);
  const { passMessage, failMessage } = createMessages(
    'toHaveEmitted',
    (value) => `Expected wrapper${value ? ` ${value}` : ''} to have emitted:`,
  );

  if (payload && actual.emitted(expected)) {
    return {
      pass,
      message: pass
        ? passMessage(unwrap(actual.emitted(expected)), { [expected]: payload })
        : failMessage(unwrap(actual.emitted(expected)), { [expected]: payload }),
    };
  }

  const actualEvents = Object.keys(actual.emitted()).join(', ');

  return {
    pass,
    message: pass ? passMessage(actualEvents, expected) : failMessage(actualEvents, expected),
  };
};

export default {
  toHaveEmitted,
  toHaveEmittedPayload: toHaveEmitted,
};
