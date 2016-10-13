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

});
