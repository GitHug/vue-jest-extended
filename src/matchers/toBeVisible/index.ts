import { Wrapper } from '@vue/test-utils';
import predicate from './predicate';
import createMessages from '../utils';

const toBeVisible = (wrapper: Wrapper<any>) => {
  const pass = predicate(wrapper);

  const { passMessage, failMessage } = createMessages(
    'toBeVisible',
    (value) => `Expected wrapper${value ? ` ${value}` : ''} to be visible:`,
  );

  return {
    pass,
    message: pass ? passMessage(wrapper.isVisible(), false) : failMessage(wrapper.isVisible(), true),
  };
};

export default {
  toBeVisible,
};
