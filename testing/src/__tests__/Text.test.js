import React from 'react';
import { shallow , mount} from 'enzyme';
import renderer from 'react-test-renderer'

import { Text } from '../Text';

it('renders a text', () => {
    const wrapper = renderer.create(<Text />).toJSON();
    expect(wrapper).toMatchSnapshot();
})

