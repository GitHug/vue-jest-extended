import FakeWrapper from '../../utils';
import matcher from '../../../src/matchers/toBeVisible';

expect.extend(matcher);

describe('.toBeVisible', () => {
  const wrapper = new FakeWrapper();

  test('passes when wrapper is visible', () => {
    wrapper.visible = true;
    expect(wrapper).toBeVisible();
  });

  test('fails when wrapper is not visible', () => {
    wrapper.visible = false;
    expect(() => {
      expect(wrapper).toBeVisible();
    }).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toBeVisible', () => {
    test('passes when wrapper does not exist', () => {
      wrapper.visible = false;
      expect(wrapper).not.toBeVisible();
    });

    test('fails when wrapper exists', () => {
      wrapper.visible = true;
      expect(() => {
        expect(wrapper).not.toBeVisible();
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
