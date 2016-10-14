import _ from 'lodash';
import {Architect, Trainer} from 'synaptic';

export const convertToSequence = sentence => {
  return _.map(sentence, (item, i) => {
    let type = item.type === 'keyup' ? 0 : 1;
    let delta = i ? item.timeStamp - sentence[i-1].timeStamp : 0;
    return [type, item.keyCode, delta];
  })
};

export default class DeepFinger {

  static defaultProps = {
    timeout: 1.0, // timeout to cut sentences
    minimalSentenceSize: 5,
  };

  constructor(props = {}) {
    this.events = [];
    this.props = {
      ...DeepFinger.defaultProps,
      ...props
    };
    this.network = new Architect.LSTM(
      3, // input gates (up/down, keycode, deltaTime)
      this.props.minimalSentenceSize, // memory cells 
      1 // output gate
    );
    this.trainer = new Trainer(this.network);
    this.status = 'learning';
  }

  keyListener = event => {
    this.appendEvent(event);
  }

  train(sequence) {
    this.trainer.train(sequence.map(item => ({input: item, output: [1]})));
  }

  evaluateSentence(sentence) {
    if (this.status === 'learning') {
      this.train(convertToSequence(sentence));
    } else {
    }
  }

  appendEvent(event) {
    if (this.events.length && event.timeStamp - this.events[this.events.length - 1].timeStamp > this.props.timeout) {
      let sentence = this.events;
      this.events = [event];
      if (sentence.length >= this.props.minimalSentenceSize) {
        this.evaluateSentence(sentence);
      }
    } else {
      this.events = _.sortBy([...this.events, event], ['timeStamp']);
    }
  }

};
