
import { expect } from 'chai';
import { sRender } from '../test_helper';
import sinon from 'sinon';

import Hello from '../../src/components/hello';
import World from '../../src/components/world';

describe('Lets write tests!' , () => {

  describe('Hello' , () => {
    let component;
    const props = {};
    const state = {};

    beforeEach(() => {
      component = sRender(Hello);
    });

    it('renders something', () => {
      expect(component).to.exist;
    });


  });
  
});
