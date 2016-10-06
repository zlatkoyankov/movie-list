import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Application from './application';

/* eslint-disable no-console w*/

function setup() {
    const props = {

    };

    return shallow(<Application {...props} />);
}

describe("src/components/Application.js tests", () => {
    it("return one div element ", () => {
        //const wrapper = setup();
        //console.log(wrapper);
    });
}); 