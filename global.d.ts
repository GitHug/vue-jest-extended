declare global {
  namespace NodeJS {
    interface Global {
      expect: typeof import('expect');
    }
  }
}

export {};
