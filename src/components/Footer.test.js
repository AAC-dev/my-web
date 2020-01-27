import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });
    it("Main div", () => {
        expect(wrapper.find('div').at(0).hasClass('footer')).toEqual(true);
    })
    it("Second div", () => {
        expect(wrapper.find('div').at(1).hasClass('copyright')).toEqual(true);
        expect(wrapper.find('div').at(1).text()).toEqual('© Adi Cohen');
    })
    it('Ul working', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('ul').hasClass('icons')).toEqual(true);
        expect(wrapper.find('a')).toHaveLength(3);
        expect(wrapper.find('a').at(0).prop("href")).toEqual('https://twitter.com/Ac206080');
        expect(wrapper.find('a').at(1).prop("href")).toEqual('https://github.com/SirAdiCohen?tab=overview&from=2018-12-01&to=2018-12-31');
        expect(wrapper.find('a').at(2).prop("href")).toEqual('https://www.linkedin.com/in/adi-cohen-04153a111/');

        expect(wrapper.find('i')).toHaveLength(3);
        expect(wrapper.find('i').at(0).hasClass('fa fa-twitter icon')).toEqual(true);
        expect(wrapper.find('i').at(1).hasClass('fa fa-git icon')).toEqual(true);
        expect(wrapper.find('i').at(2).hasClass('fa fa-linkedin icon')).toEqual(true);
    })
    /*   it("it should work", () => {
           const handlerMock = jest.fn();
           const wrapperA = shallow(<Footer onClickHandler={handlerMock} />);
           expect(handlerMock).not.toHaveBeenCalled();
           wrapperA.find('a').at(0).simulate('click');
           expect(handlerMock.mock.calls.length).toEqual(1)
           //  wrapperA.instance().handlerMock();
           //expect(handlerMock).toBeCalled();
           //expect(wrapperA.find('a').at(0).prop('onClick'));
           //expect(wrapper.find('a').at(0).prop('onClick'));
   
       })
   */
})