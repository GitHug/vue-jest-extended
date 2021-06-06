declare namespace jest {
  export interface Matchers<R> {
    toHaveEmitted(event: string, payload?: any): R;
    toHaveEmittedPayload(event: string, payload: any): R;

    toExist(): R;
  }
}

declare global {
  namespace jest {
    export interface Matchers<R> {
      toHaveEmitted(event: string, payload?: any): R;
      toHaveEmittedPayload(event: string, payload: any): R;

      toExist(): R;
    }
  }
}

export {};
