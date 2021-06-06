import { equals } from 'expect/build/jasmineUtils';

const hasPayload = (actual: Array<Array<any>>, expected: any) => actual.some(([payload]) => equals(payload, expected));

export default (actual: { [name: string]: Array<Array<any>> | undefined }, event?: string, payload?: any): boolean => {
  if (!event || !actual[event]) return false;

  const eventWithPayload = actual[event];

  if (eventWithPayload && payload) {
    return hasPayload(eventWithPayload, payload);
  }

  return true;
};
