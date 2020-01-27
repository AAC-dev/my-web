import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import videoSrc from '../static/sample.mp4';


describe("Header Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it("Header div, video tag", () => {
        expect(wrapper.find('div').length).toBe(4);
        expect(wrapper.find('.header')).toHaveLength(1);
        expect(wrapper.find('video').length).toBe(1);
        expect(wrapper.find('source').prop("src")).toEqual(videoSrc);

    })
    it("Nav bar", () => {
        expect(wrapper.find('.header-typorgaphy').exists()).toEqual(true);
        expect(wrapper.find('nav').hasClass('navigation-bar')).toEqual(true);
        expect(wrapper.find('a')).toHaveLength(2);
        expect(wrapper.find('a').at(0).text('Contact')).toEqual('Contact');
        expect(wrapper.find('a').at(1).text('About')).toEqual('About');

    })
    it("h1, h3", () => {
        expect(wrapper.find('h1').hasClass('main-header')).toEqual(true);
        expect(wrapper.find('h3')).toHaveLength(1);
        expect(wrapper.find('h1').text('ADI COHEN')).toEqual("ADI COHEN");
        expect(wrapper.find('h3').text('WEB DEVELOPER')).toEqual("WEB DEVELOPER");
    })

})

