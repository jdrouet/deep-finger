import _ from 'lodash';

export default class DeepFinger {

  static defaultProps = {
    timeout: 1.0 // timeout to cut words
  };

  constructor(props = {}) {
    this.props = {
      ...DeepFinger.defaultProps,
      ...props
    };
  }

  events = [];

  keyListener = event => {
    this.appendEvent(event);
  }

  evaluateSentence(sentence) {
  }

  appendEvent(event) {
    if (this.events.length && event.timeStamp - this.events[this.events.length - 1].timeStamp > this.props.timeout) {
      let sentence = this.events;
      this.events = [event];
      this.evaluateSentence(sentence);
    } else {
      this.events = _.sortBy([...this.events, event], ['timeStamp']);
    }
  }

};
