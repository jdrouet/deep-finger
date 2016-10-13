import {expect} from 'chai';
import DeepFinger from '../source';

describe('DeepFinger module', function() {

  it('should return a DeepFinger class', () => {
    expect(DeepFinger).to.be.ok;
  });

  it('should be instanciable', () => {
    let instance = new DeepFinger();
    expect(instance).to.be.an.instanceOf(DeepFinger);
    expect(instance.props).to.be.an('object');
  });

  it('should have default props', () => {
    let instance = new DeepFinger();
    expect(instance.props).to.be.an('object');
    expect(instance.props.timeout).to.eql(DeepFinger.defaultProps.timeout);
  });

});
