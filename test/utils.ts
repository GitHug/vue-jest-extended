export default class FakeWrapper {
  events!: { [name: string]: Array<Array<any>> };
  public existing = true;
  public visible = true;

  constructor() {
    this.events = {};
  }

  emit(event: string, payload?: any) {
    if (this.events[event]) {
      this.events[event].push([payload]);
    } else {
      Object.assign(this.events, { [event]: [[payload]] });
    }
  }

  emitted(): { [name: string]: Array<Array<any>> | undefined };
  emitted(event: string): Array<any> | undefined;
  emitted(event?: string): { [name: string]: Array<Array<any>> | undefined } | Array<any> | undefined {
    if (event) {
      return this.events[event];
    }

    return this.events;
  }

  exists() {
    return this.existing;
  }

  isVisible() {
    return this.visible;
  }
}
