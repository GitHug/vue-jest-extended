const jestExpect = global.expect;

jestExpect.extend({
  toHaveEmitted(wrapper, event) {
    const [[wrapperEvent]] = wrapper.emitted(event) || [[]];

    const emitted = Object.entries(wrapper.emitted())
      .reduce((acc, [key, [value]]) => Object.assign(acc, { [key]: value }), {});

    const message = wrapperEvent
      ? () => `${this.utils.matcherHint('.not.toHaveEmitted')}\n\n
        Expected wrapper not to have emitted:\n
          ${this.utils.printExpected(event)}
        Received:\n
          ${this.utils.printReceived(emitted)}
        `
      : () => `${this.utils.matcherHint('.toHaveEmitted')}\n\n
        Expected wrapper to have emitted:\n
          ${this.utils.printExpected(event)}
        Received:\n
          ${this.utils.printReceived(emitted)}
        `;
    return { actual: wrapperEvent, message, pass: !!wrapperEvent };
  },

  toHaveEmittedPayload(wrapper, event, payload) {
    const [[wrapperEvent]] = wrapper.emitted(event) || [[]];

    const emitted = Object.entries(wrapper.emitted())
      .reduce((acc, [key, [value]]) => Object.assign(acc, { [key]: value }), {});

    const pass = JSON.stringify(wrapperEvent) === JSON.stringify(payload);

    const message = pass
      ? () => `${this.utils.matcherHint('.not.toHaveEmitted')}\n\n
        Expected wrapper not to have emitted:\n
          ${this.utils.printExpected({ [event]: [{ ...payload }] })}
        Received:\n
          ${this.utils.printReceived(emitted)}
        `
      : () => `${this.utils.matcherHint('.toHaveEmitted')}\n\n
        Expected wrapper to have emitted:\n
          ${this.utils.printExpected({ [event]: [{ ...payload }] })}
        Received:\n
          ${this.utils.printReceived(emitted)}
        `;
    return { actual: wrapperEvent, message, pass };
  }
});
