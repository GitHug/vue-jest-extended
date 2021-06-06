import { Wrapper } from '@vue/test-utils';
import predicate from '../../../src/matchers/toExist/predicate';
import FakeWrapper from '../../utils';

describe('toExist predicate', () => {
  it.each([
    [true, 'exists'],
    [false, 'not exist'],
  ])('should return %s if wrapper %s', (expected) => {
    const wrapper = new FakeWrapper();
    wrapper.existing = expected;

    expect(predicate(wrapper as unknown as Wrapper<any>)).toBe(expected);
  });
});
