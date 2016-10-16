import {expect} from 'chai';
import DeepFinger from '../source';

describe('DeepFinger evaluateSentence', function() {

  beforeEach(() => {
    this.instance = new DeepFinger();
  });

  it('should exist', () => {
    expect(this.instance.evaluateSentence).to.be.a('function');
  });

});
