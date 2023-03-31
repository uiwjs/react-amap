import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Map, useMap } from '../src';

describe('<Map />', () => {
  it('Map test case', () => {
    expect(typeof Map).toEqual('object');
    expect(typeof useMap).toEqual('function');
    const component = TestRenderer.create(<Map />);
    let tree = component.toJSON();
    expect(tree).toMatchObject({
      type: 'div',
      props: { className: undefined, style: { fontSize: 1, height: '100%' } },
      children: null,
    });
  });
});
