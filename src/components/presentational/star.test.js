import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Star from './star';

function setup(notEmpty = true) {
  const props = {
    notEmpty: notEmpty
  };
  return shallow(<Star {...props} />);
}

describe("src/components/presentational/star tests", () => {
  it("return glyphicon component", () => {
    let wrapper = setup();
    
    expect(wrapper.props().glyph).toBe('star');

    wrapper = setup(false);

    expect(wrapper.props().glyph).toBe('star-empty');
  });
});
