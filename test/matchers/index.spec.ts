import FakeWrapper from '../utils';
import matchers from '../../src/matchers/index';

expect.extend(matchers);

describe('matchers', () => {
  test('toHaveEmitted matcher', () => {
    const wrapper = new FakeWrapper();
    wrapper.emit('input', {});

    expect(wrapper).toHaveEmitted('input');
    expect(wrapper).toHaveEmittedPayload('input', {});
  });
});
