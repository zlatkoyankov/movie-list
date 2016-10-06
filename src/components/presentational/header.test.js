import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

function setup(text) {
    const props = {
        projectTitle: text
    };

    return shallow(<Header {...props} />);
}

describe("src/component/presentationl/header test ", () => {
    it("return proper header elements", () => {
        const wrapper = setup();

        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('h3').length).toBe(1);
    });

    it("return proper text", () => {
        let wrapper = setup();

        expect(wrapper.find('h3').text()).toBe('');

        const projectName = 'Project name';
        wrapper = setup(projectName);
        expect(wrapper.find('h3').text()).toBe(projectName);
    });
});
