import {expect} from 'chai';
import DeepFinger from '../source';

describe('DeepFinger listeners', function() {

  beforeEach(() => {
    this.instance = new DeepFinger();
  });

  it('should exist', () => {
    expect(this.instance.keyListener).to.be.a('function');
  });

});
