import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it("main div", () => {
        expect(wrapper.find('div').at(0).hasClass("App")).toEqual(true);
        expect(wrapper.find('div')).toHaveLength(2);
        expect(wrapper.find('Header')).toHaveLength(1);
        expect(wrapper.find('About')).toHaveLength(1);
        expect(wrapper.find('Contact')).toHaveLength(1);
        expect(wrapper.find('Footer')).toHaveLength(1);

    })

})