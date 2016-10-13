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
  keyListener = event => this.events.push(event);

};
