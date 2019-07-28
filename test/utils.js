export default class FakeWrapper {
  constructor() {
    this.events = { };
  }

  emit(event, payload) {
    if (this.events[event]) {
      this.events[event].push([payload]);
    } else {
      Object.assign(this.events, { [event]: [[payload]] });
    }
  }

  emitted(event) {
    return event ? this.events[event] : this.events;
  }
}
