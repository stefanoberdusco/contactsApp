/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ContactList} from '../src/components/ContactList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ContactList />).toJSON();
  expect(tree).toMatchSnapshot();
});
