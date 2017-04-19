import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hello from '../../src/components/hello';

describe('Lets write tests!' , () => {

  describe('Hello' , () => {
    let component;
    const props = {
      history: undefined,
      location: undefined,
      match: {
        isExact: true,
        params: {
          name: 'hello world',
        },
        path: '/hello',
        url: '/hello/',
      },
    };

    beforeEach(() => {
      component = shallow(<Hello {...props} />);
    });

    it('renders something', () => {
      expect(component).to.exist;
    });
  });
});
