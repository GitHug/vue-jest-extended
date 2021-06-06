import { Wrapper } from '@vue/test-utils';
import predicate from './predicate';
import createMessages from '../utils';

const toExist = (wrapper: Wrapper<any>) => {
  const pass = predicate(wrapper);

  const { passMessage, failMessage } = createMessages(
    'toExist',
    (value) => `Expected wrapper${value ? ` ${value}` : ''} to exist:`,
  );

  return {
    pass,
    message: pass ? passMessage(wrapper.exists(), false) : failMessage(wrapper.exists(), true),
  };
};

export default {
  toExist,
};
