import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);

});

it('renders with hello', () => {
  const wrapper = mount(<App />);
  const content = <p>Hello</p>;
  expect(wrapper.contains(content)).toEqual(true);

})