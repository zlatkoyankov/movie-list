import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

function setup(text) {
    const props = {
        text: text
    };

    return shallow(<Footer {...props} />);
}

describe("src/component/presentationl/Footer test ", () => {
    it("return proper footer elements", () => {
        const wrapper = setup();
        expect(wrapper.find('footer').length).toBe(1);
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text()).toBe('');
    });

    it("return proper text", () => {
        let wrapper = setup();
        expect(wrapper.find('p').text()).toBe('');

        wrapper = setup("some text");
        expect(wrapper.find('p').text()).toBe('some text');
    });

});
