import {expect} from 'chai';
import DeepFinger from '../source';

describe('DeepFinger listeners', function() {

  beforeEach(() => {
    this.instance = new DeepFinger();
  });

  it('should exist', () => {
    expect(this.instance.keyListener).to.be.a('function');
  });

  it('should append the event to the event list', () => {
    let event = {type: 'keyup', keyCode: 42, timeStamp: 12345678.90};
    expect(this.instance.events).to.have.lengthOf(0);
    this.instance.keyListener(event);
    expect(this.instance.events).to.be.an('array');
    expect(this.instance.events).to.have.lengthOf(1);
  });

  it('should treat the event list if the event is out of the timeout', () => {
    this.instance.keyListener({type: 'keydown', keyCode: 42, timeStamp: 0.0});
    this.instance.keyListener({type: 'keyup', keyCode: 42, timeStamp: 0.51});
    this.instance.keyListener({type: 'keydown', keyCode: 42, timeStamp: 1.2});
    this.instance.keyListener({type: 'keyup', keyCode: 42, timeStamp: 1.61});
    expect(this.instance.events).to.have.lengthOf(4);
    this.instance.keyListener({type: 'keydown', keyCode: 42, timeStamp: 3.61});
    expect(this.instance.events).to.have.lengthOf(1);
  });

});
