import FakeWrapper from '../../utils';
import matcher from '../../../src/matchers/toHaveEmitted';

expect.extend(matcher);

class Dummy {
  foo = 'bar';
}

describe('.toHaveEmitted', () => {
  const wrapper = new FakeWrapper();
  wrapper.emit('input', { data: 'test' });
  wrapper.emit('change', { test: { data: new Dummy() } });
  wrapper.emit('keyUp');

  test('that toHaveEmittedPayload is an alias for toHaveEmitted', () => {
    expect(matcher.toHaveEmittedPayload).toBe(matcher.toHaveEmitted);
  });

  describe('passes when', () => {
    test.each(['input', 'change', 'keyUp'])(
      'the expected event %s matches one emitted by the wrapper',
      (event: string) => {
        expect(wrapper).toHaveEmitted(event);
      },
    );

    test.each([
      ['input', { data: 'test' }],
      ['change', { test: { data: new Dummy() } }],
    ])(
      'the expected event %s and the expected payload %o matches event and payload emitted',
      (event: string, payload: any) => {
        expect(wrapper).toHaveEmitted(event, payload);
      },
    );
  });

  describe('fails when', () => {
    test.each([undefined, null, NaN, [], {}, 'keyDown'])(
      'the expected event %s has not been emitted by the wrapper',
      (event: any) => {
        expect(() => {
          expect(wrapper).toHaveEmitted(event);
        }).toThrowErrorMatchingSnapshot();
      },
    );

    test.each([
      ['input', { test: 'data' }],
      ['change', { test: { data: [{}] } }],
    ])('the expected event %s and payload %o combination has not been emitted', (event: string, payload: any) => {
      expect(() => {
        expect(wrapper).toHaveEmitted(event, payload);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
