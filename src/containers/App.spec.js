import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});
