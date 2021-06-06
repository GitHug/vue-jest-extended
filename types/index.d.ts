/// <reference types="jest" />

declare namespace jest {
  export interface Matchers<R> {
    toHaveEmitted(event: string, payload?: any): R;
    toHaveEmittedPayload(event: string, payload: any): R;

    toExist(): R;
  }
}
