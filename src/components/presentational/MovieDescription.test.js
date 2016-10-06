import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import MovieDescription from './MovieDescription';

function setup(movie) {
    const props = {
        movie: movie
    };

    return shallow(<MovieDescription {...props} />);
}

const movie = {
  title: "movie Title",
  release_date: "date",
  genres: "ganre",
  original_language: "language",
  overview: "movie overview"
};

describe("src/component/presentationl/MovieDescription test ", () => {
    it("return proper MovieDescription elements", () => {
        const wrapper = setup(movie);
        expect(wrapper.find('Panel').length).toBe(1);
        expect(wrapper.find('Table').length).toBe(1);

        const keysLength = Object.keys(movie).length;
        expect(wrapper.find('tr').length).toBe(keysLength);
    });
    it("table rows are ordered correctly ", () => {
      const wrapper = setup(movie);

      const tds = wrapper.find('td');
      for(let key in movie) {
        expect(tds.contains(movie[key])).toBe(true);
      }
    });
});
