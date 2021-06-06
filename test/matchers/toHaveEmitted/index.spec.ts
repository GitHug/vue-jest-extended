import FakeWrapper from '../../utils';
import matcher from '../../../src/matchers/toHaveEmitted/index';

expect.extend(matcher);

describe('.toHaveEmitted', () => {
  const wrapper = new FakeWrapper();
  wrapper.emit('input', { data: 'test' });
  wrapper.emit('change', { test: { data: new FakeWrapper() } });
  wrapper.emit('keyUp');

  test('that toHaveEmittedPayload is an alias for toHaveEmitted', () => {
    expect(matcher.toHaveEmittedPayload).toBe(matcher.toHaveEmitted);
  });

  describe('passes when', () => {
    const testCases = ['input', 'change', 'keyUp'];
    const testCasesWithPayload = [
      { event: 'input', payload: { data: 'test' } },
      { event: 'change', payload: { test: { data: new FakeWrapper() } } },
    ];

    testCases.forEach((event) => {
      test(`the expected event ${event} matches one emitted by the wrapper`, () => {
        expect(wrapper).toHaveEmitted(event);
      });
    });

    testCasesWithPayload.forEach(({ event, payload }) => {
      test(`the expected event ${event} matches one emitted by the wrapper including its payload ${JSON.stringify(
        payload,
      )}`, () => {
        expect(wrapper).toHaveEmitted(event, payload);
      });
    });
  });

  describe('fails when', () => {
    const testCases = [undefined, null, NaN, [], {}, 'keyDown'];
    const testCasesWithPayload = [
      { event: 'input', payload: { test: 'data' } },
      { event: 'change', payload: { test: { data: [{}] } } },
    ];

    testCases.forEach((event) => {
      test(`the expected event ${event} has not been emitted by the wrapper`, () => {
        expect(() => {
          expect(wrapper).toHaveEmitted(event as any);
        }).toThrowErrorMatchingSnapshot();
      });
    });

    testCasesWithPayload.forEach(({ event, payload }) => {
      test(`the expected event ${event} has been emitted by the wrapper but the payload ${JSON.stringify(
        payload,
      )} has not been emitted`, () => {
        expect(() => {
          expect(wrapper).toHaveEmitted(event, payload);
        }).toThrowErrorMatchingSnapshot();
      });
    });
  });
});
