import React from 'react';
import renderer from 'react-test-renderer';
import {expect, test} from 'vitest';

import HomePage from '../pages/HomePage';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(<HomePage />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();

  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
