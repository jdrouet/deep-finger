import {expect} from 'chai';
import DeepFinger from '../source';

describe('DeepFinger module', function() {

  it('should return a DeepFinger class', () => {
    expect(DeepFinger).to.be.ok;
  });

  it('should be instanciable', () => {
    let instance = new DeepFinger();
    expect(instance).to.be.an.instanceOf(DeepFinger);
  });

});
