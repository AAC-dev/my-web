import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe("About component", () => {
    let wrapper;
    const mockHandler = jest.fn();;
    beforeEach(() => {
        wrapper = shallow((<About onClick={mockHandler} />))
    })
    it('Main div', () => {
        expect(wrapper.find('div').at(0).hasClass('about')).toEqual(true);
        expect(wrapper.find('div')).toHaveLength(4);
        expect(wrapper.find('p')).toHaveLength(5);
    })
    it('About-header', () => {
        expect(wrapper.find('div').at(1).hasClass('about-header')).toEqual(true);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('h1').text()).toEqual('ABOUT ME');
    })
    it('Skills section', () => {
        expect(wrapper.find('div').at(2).hasClass('skills')).toEqual(true);
        expect(wrapper.find('ol')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(3);
        expect(wrapper.find('p').at(0).text()).toEqual(' I`m  Web devoloper, living in Israel.');
        expect(wrapper.find('p').at(1).text()).toEqual('I enjoy building everything from SPA to rich interactive web app.');
        expect(wrapper.find('p').at(2).text()).toEqual('My main focus is on JavaScript and React in particular.');
    })
    it('Quote section', () => {
        expect(wrapper.find('div').at(3).hasClass('block-quote')).toEqual(true);
        expect(wrapper.find('p').at(3).hasClass('quote')).toEqual(true);
        expect(wrapper.find('p').at(3).text()).toEqual('In the middle of difficulty lies opportunity')
        expect(wrapper.find('p').at(4).hasClass('quote-by')).toEqual(true)
        expect(wrapper.find('p').at(4).text()).toEqual('Albert Einstein');

    })

})