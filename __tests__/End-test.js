/**
 * @format
 */

import 'react-native';
import React from 'react';
import End from '../comps/End';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('End component renders correctly', () => {
  renderer.create(<End />);
});
