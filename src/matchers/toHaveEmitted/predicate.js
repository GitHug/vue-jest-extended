import { equals } from 'expect/build/jasmineUtils';

const hasPayload = (actual, expected) => !!actual.find(([payload]) => equals(payload, expected));

export default (actual, event, payload) => {
  const eventWithPayload = actual[event];

  if (eventWithPayload && payload) {
    return hasPayload(eventWithPayload, payload);
  }

  return !!eventWithPayload;
};
