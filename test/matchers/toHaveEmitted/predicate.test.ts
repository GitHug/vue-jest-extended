import predicate from '../../../src/matchers/toHaveEmitted/predicate';

const events = {
  input: [[]],
  change: [['data']],
  keyUp: [[{ complex: true, deep: { test: 'data' } }]],
};

describe('toHaveEmitted predicate', () => {
  describe('returns true', () => {
    test('when the actual events contain the given event', () => {
      expect(predicate(events, 'input')).toBe(true);
    });

    test('when the actual events contain the given event and payload', () => {
      expect(predicate(events, 'keyUp', { complex: true, deep: { test: 'data' } })).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when passed an event of undefined', () => {
      expect(predicate(events, undefined)).toBe(false);
    });

    test('when the actual events does not contain the given event', () => {
      expect(predicate(events, 'foo')).toBe(false);
    });

    test('when the actual event does not match the given payload', () => {
      expect(predicate(events, 'keyUp', { complex: true, deep: { test: 'foo' } })).toBe(false);
    });

    test('when no events have been emitted', () => {
      expect(predicate({}, 'input')).toBe(false);
    });
  });
});
