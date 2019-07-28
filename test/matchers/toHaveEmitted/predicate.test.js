import predicate from '../../../src/matchers/toHaveEmitted/predicate';

const events = {
  input: [[]],
  change: [['data']],
  keyUp: [[{ complex: true, deep: { test: 'data' } }]]
};

describe('toHaveEmitted predicate', () => {
  describe('returns true', () => {
    const testCases = [{ event: 'input' }, { event: 'change', payload: 'data' }, { event: 'keyUp', payload: { complex: true, deep: { test: 'data' } } }];

    testCases.forEach(({ event, payload }) => {
      test(`when the actual events contain ${event} with payload ${JSON.stringify(payload)}`, () => {
        expect(predicate(events, event)).toBe(true);
      });
    });
  });

  describe('returns false', () => {
    const testCases = [
      { event: undefined },
      { event: 'keyDown' },
      { event: 'input', payload: [] },
      { event: 'input', payload: {} },
      { event: 'input', payload: 'data' },
      { event: 'keyUp', payload: { complex: true, deep: { test: 'foo' } } }
    ];

    testCases.forEach(({ event, payload }) => {
      test(`when the actual events does not contain ${event} or does not have payload ${JSON.stringify(payload)}`, () => {
        expect(predicate(events, event, payload)).toBe(false);
      });
    });

    test('when the list of actual events is empty', () => {
      expect(predicate([], 'input')).toBe(false);
    });
  });
});
