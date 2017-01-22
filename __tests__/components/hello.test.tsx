import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import Hello, { IProps } from '../../src/components/hello';

describe('Lets write tests!' , () => {

  describe('Hello' , () => {
    let component: any;
    const props: IProps = {
      params: {
        name: 'hello world',
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
