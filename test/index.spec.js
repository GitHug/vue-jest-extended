import VueJestExtended from '../src/index';

class FakeWrapper {
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

expect.extend(VueJestExtended);

describe('VueJestExtended', () => {
  describe('.toHaveEmitted', () => {
    it('passes when one of the events emitted by the wrapper matches the event given', () => {
      const wrapper = new FakeWrapper();
      wrapper.emit('input', { data: 'test' });
      wrapper.emit('change', { test: 'data' });

      expect(wrapper).toHaveEmitted('input');
    });

    it('fails if none of the events emitted by the wrapper matches the event given', () => {
      const wrapper = new FakeWrapper();
      wrapper.emit('change', { data: 'test' });

      expect(() => {
        expect(wrapper).toHaveEmitted('input');
      }).toThrowErrorMatchingSnapshot();
    });

    it('fails if no event has been emitted', () => {
      const wrapper = new FakeWrapper();

      expect(() => {
        expect(wrapper).toHaveEmitted('input');
      }).toThrowErrorMatchingSnapshot();
    });

    describe('.not.toHaveEmitted', () => {
      it('fails when one of the events emitted by the wrapper matches the event given', () => {
        const wrapper = new FakeWrapper();
        wrapper.emit('input', { data: 'test' });

        expect(() => {
          expect(wrapper).not.toHaveEmitted('input');
        }).toThrowErrorMatchingSnapshot();
      });

      it('passes if none of the events emitted by the wrapper matches the event given', () => {
        const wrapper = new FakeWrapper();
        wrapper.emit('change', { data: 'test' });

        expect(wrapper).not.toHaveEmitted('input');
      });

      it('passes if no event has been emitted', () => {
        const wrapper = new FakeWrapper();

        expect(wrapper).not.toHaveEmitted('input');
      });
    });
  });

  describe('.toHaveEmittedPayload', () => {
    it('passes when the payload of the event emitted by the wrapper matches the payload given', () => {
      const wrapper = new FakeWrapper();
      wrapper.emit('input', { data: 'test' });
      wrapper.emit('change', { test: 'data' });

      expect(wrapper).toHaveEmittedPayload('input', { data: 'test' });
    });

    it('fails if the payload of the event does not match the payload given', () => {
      const wrapper = new FakeWrapper();
      wrapper.emit('input', { data: 'test' });
      wrapper.emit('change', { test: 'data' });

      expect(() => {
        expect(wrapper).toHaveEmittedPayload('input', { test: 'data' });
      }).toThrowErrorMatchingSnapshot();
    });

    it('fails if the event has not been emitted', () => {
      const wrapper = new FakeWrapper();
      wrapper.emit('change', { test: 'data' });

      expect(() => {
        expect(wrapper).toHaveEmittedPayload('input', { test: 'data' });
      }).toThrowErrorMatchingSnapshot();
    });

    it('fails if no event has been emitted', () => {
      const wrapper = new FakeWrapper();

      expect(() => {
        expect(wrapper).toHaveEmittedPayload('input', { test: 'data' });
      }).toThrowErrorMatchingSnapshot();
    });

    describe('.not.toHaveEmittedPayload', () => {
      it('fails when the payload of the event emitted by the wrapper matches the payload given', () => {
        const wrapper = new FakeWrapper();
        wrapper.emit('input', { data: 'test' });
        wrapper.emit('change', { test: 'data' });

        expect(() => {
          expect(wrapper).not.toHaveEmittedPayload('input', { data: 'test' });
        }).toThrowErrorMatchingSnapshot();
      });

      it('passes if the payload of the event does not match the payload given', () => {
        const wrapper = new FakeWrapper();
        wrapper.emit('input', { data: 'test' });
        wrapper.emit('change', { test: 'data' });

        expect(wrapper).not.toHaveEmittedPayload('input', { test: 'data' });
      });

      it('passes if the event has not been emitted', () => {
        const wrapper = new FakeWrapper();
        wrapper.emit('change', { test: 'data' });

        expect(wrapper).not.toHaveEmittedPayload('input', { test: 'data' });
      });

      it('passes if no event has been emitted', () => {
        const wrapper = new FakeWrapper();

        expect(wrapper).not.toHaveEmittedPayload('input', { test: 'data' });
      });
    });
  });
});
