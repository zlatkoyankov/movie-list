import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import MovieRow from './movieRow';
import Star from './star';
import { Button } from 'react-bootstrap';


function setup({ movie = {}, text = '', onClick = () => {}, btnClick = () => {} } = {}) {
  const props = {
    movie: movie,
    onClick: onClick,
    btnClick: btnClick,
    text: text
  };
  return shallow(<MovieRow {...props} />);
}

describe("src/components/presentational/movieRow tests", () => {
  it("return MovieRow component with proper li, button, star and text", () => {
    const wrapper = setup();

    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Star).length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });

  it("contain proper texts ", () => {
    const wrapper = setup({ text: "some text" });

    expect(wrapper.find(Button).childAt(0).text()).toBe('Add to ');
    expect(wrapper.find(Button).childAt(1).type()).toEqual(Star);
    expect(wrapper.find('span').text()).toBe('some text');
  });

  it("call the proper functions with correct movie", () => {
    const props = {
      movie: {title: ""},
      onClick: expect.createSpy(),
      btnClick: expect.createSpy(),
      text: 'some text'
    };

    const wrapper = setup(props);

    wrapper.simulate('click', {stopPropagation: () => {}});
    wrapper.find(Button).simulate('click', {stopPropagation: () => {}});

    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalledWith(props.movie);
    expect(props.btnClick).toHaveBeenCalled();
    expect(props.btnClick).toHaveBeenCalledWith(props.movie);

  });
});
