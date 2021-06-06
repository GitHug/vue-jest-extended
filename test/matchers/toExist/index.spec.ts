import FakeWrapper from '../../utils';
import matcher from '../../../src/matchers/toExist';

expect.extend(matcher);

describe('.toExist', () => {
  const wrapper = new FakeWrapper();

  test('passes when wrapper exists', () => {
    wrapper.existing = true;
    expect(wrapper).toExist();
  });

  test('fails when wrapper does not exist', () => {
    wrapper.existing = false;
    expect(() => {
      expect(wrapper).toExist();
    }).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toExist', () => {
    test('passes when wrapper does not exist', () => {
      wrapper.existing = false;
      expect(wrapper).not.toExist();
    });

    test('fails when wrapper exists', () => {
      wrapper.existing = true;
      expect(() => {
        expect(wrapper).not.toExist();
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
