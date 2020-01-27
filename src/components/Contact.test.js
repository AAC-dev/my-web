import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';


describe('Contact component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contact />)
    });
    it("Main", () => {
        expect(wrapper.find('div')).toHaveLength(11);
        expect(wrapper.find('h6')).toHaveLength(1);
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(4);
        expect(wrapper.find('label')).toHaveLength(3);
        expect(wrapper.find('div').at(0).hasClass('contact')).toEqual(true);
        expect(wrapper.find('div').at(1).hasClass('logo')).toEqual(true);
        expect(wrapper.find('div').at(2).hasClass('contact-title')).toEqual(true);
        expect(wrapper.find('h6').text()).toEqual('PLEASE LEAVE YOUR DETAILS BELOW AND WE’LL CONTACT YOU');
        expect(wrapper.find('div').at(3).hasClass('fields')).toEqual(true);
        expect(wrapper.find('div').at(4).hasClass('input-field')).toEqual(true);
        expect(wrapper.find('div').at(5).hasClass('text-danger')).toEqual(true);
        expect(wrapper.find('div').at(6).hasClass('input-field')).toEqual(true);
        expect(wrapper.find('div').at(7).hasClass('text-danger')).toEqual(true);
        expect(wrapper.find('div').at(8).hasClass('input-field')).toEqual(true);
        expect(wrapper.find('div').at(9).hasClass('text-danger')).toEqual(true);
        expect(wrapper.find('label').at(0).text('Full Name:')).toEqual('Full Name:');
        expect(wrapper.find('label').at(1).text('Email:')).toEqual('Email:');
        expect(wrapper.find('label').at(2).text('Phone:')).toEqual('Phone:');
    })
});

describe('Should simulate handle change', () => {
    let handleChange = jest.fn();
    let props = {
        onChange: handleChange
    };

    it('', () => {
        let wrapper = shallow(<Contact {...props} />)
        let event = {
            preventDefault: jest.fn(),
            target: {
                name: 'fullName',
                value: 'test'
            }

        }
        wrapper.find('input[name="fullName"]').simulate('change', event);
        expect(wrapper.find('input[name="fullName"]').prop('value')).toBe('test');
        expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
        expect(event.preventDefault).toHaveBeenCalled();
    });


    describe('Should simulate cliking on a button', () => {
        let handleClick = jest.fn();
        it("PrevenDefault working", () => {
            let props = { onSubmit: handleClick };
            let wrapper = shallow(<Contact {...props} />);
            let event = {
                preventDefault: jest.fn()
            };
            wrapper.find('form').simulate('submit', event);
            expect(event.preventDefault).toHaveBeenCalled();
        });
        xit("Simulating  a submit after a change event ", () => {
            let handleChange = jest.fn();
            let props = {
                onChange: handleChange,
                onSubmit: handleClick
            };
            let wrapper = shallow(<Contact {...props} />);
            let checked = wrapper.find('input[name="fullName"]').props('value');
            console.log(checked);
            wrapper.find('input[name="fullName"]').simulate('change', { preventDefault: jest.fn(), target: { name: "fullName", value: 'test' } });
            wrapper.find('form').simulate('submit', {
                preventDefault: jest.fn()
            });
            console.log(checked);
        })
    });


    describe('useEffect testing', () => {
        let useEffect;
        let sendMail;
        let wrapper;

        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());

        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect");
            const props = {
                sendMail: jest.fn().mockResolvedValue({})
            };

            mockUseEffect();
            wrapper = shallow(<Contact {...props} />)
            expect(props.sendMail).toHaveBeenCalled();
        })
    })






});
/*

      xdescribe('Should simulate cliking on a button', () => {
            let handleClick = jest.fn();
            let props = { onSubmit: handleClick };
            let wrapper = shallow(<Contact {...props} />);
            let event = {
                preventDefault: jest.fn()
            };
            it('first try', () => {

                wrapper.find('input').at(4).simulate('submit', event);
                //  expect(wrapper.find('button').text()).toEqual('Submit');
                expect(event.preventDefault).toHaveBeenCalled();
                const callback = handleClick.mock.calls.length;
                console.log(callback);
            })
        })
    })

 xdescribe("Cllaing the function after clicking need to understand why things working", () => {
        it('broken success', () => {
            let wrapper;
            let mockFunc;
            beforeEach(() => {
                mockFunc = jest.fn();
                const props = {
                    handleClick: mockFunc
                }
                wrapper = shallow(<Contact {...props} />);
                let callback = mockFunc.mock.calls.length;
                expect(wrapper.find('button').length).toBe(1);
                expect(callback).toEqual(0);
                wrapper.find('button').props().onClick({
                    preventDefault: () => { }
                });
                expect(mockFunc).toHaveBeenCalled();
                expect(callback).toEqual(1);
            })
        })
        xit('fourth try', () => {
            let handleClick = jest.fn();
            let props = { onClick: handleClick };
            let wrapper = shallow(<Contact {...props} />);
            let event = {
                preventDefault: jest.fn()
            };

            wrapper.find('form').at(0).simulate('submit', event);
            expect(wrapper.find('button').text()).toEqual('Submit')
            expect(event.preventDefault).toHaveBeenCalled();
            const callback = handleClick.mock.calls.length;
            expect(callback).toBe(1);
        })
        xit('third try', () => {
            let handleMock = jest.fn();
            const props = {
                handleClick: handleMock
            };
            let wrapper = shallow(<Contact {...props} />);
            let btn = wrapper.find('button').at(0);
            btn.simulate('click', { preventDefault: jest.fn() });
            wrapper.find('button').props().onClick({
                preventDefault: () => { }
            });
            const callback = handleMock.mock.calls.length;
            expect(callback).toBe(1);
        })
        xit('second try', () => {
            let handleClick = jest.fn();
            let props = { onClick: handleClick };
            let wrapper = shallow(<Contact {...props} />);
            let preventDefault = jest.fn();

            wrapper.find('button').props().onClick({ preventDefault });
            expect(preventDefault).toHaveBeenCalled();
            expect(handleClick).toHaveBeenCalled();


        })

    });











describe('should simulate button click', () => {
    it('should simulate button click', () => {
        const mockedFunction = jest.fn();

        const wrapper = shallow(<Contact onClick={mockedFunction} />);

        wrapper.find('button').simulate('click',
            { preventDefault: () => { } }
        );

        expect(mockedFunction).toHaveBeenCalled();
    });
});

/*


describe('', () => {
    xit('', () => {
        let mockOnChange = jest.fn();
        const props = {
            mockOnChange: mockOnChange
        }
        let wrapper = shallow(<Contact {...props} />)
        console.log(wrapper.debug());
        let event = {
            preventDefault: () => { },
            name: 'fullName',
            target: {
                value: 'test'
            }

        }
        wrapper.find('input').at(0).props().onChange({ event })
        expect(mockOnChange).toHaveBeenCalledWith('test');
    })
    xit('second assertion', () => {
        let mockOnChange = jest.fn();
        let name = 'fullName';
        let value = 'test';
        let wrapper = shallow(<Contact onChange={mockOnChange} />)
        console.warn(mockOnChange);
        wrapper.instance().onChange({ target: { name, value } });
        expect(mockOnChange).toHaveBeenCalled('test');
    })
    it('', () => {
        let handleChange = jest.fn();
        let mockName = 'fullName';
        let mockValue = 'test';
        let wrapper;
        wrapper = shallow(<Contact onChange={handleChange} />);
        wrapper.find('input').at(0).simulate('change', {
            preventDefault: () => { },
            target: {
                name: mockName,
                value: mockValue
            }
        })
        expect(handleChange).toHaveBeenCalledWith("test");

    })
})


/*
describe("simulate onchange input fileds", () => {
    let wrapper;
    let mockOnChange;
    beforeEach(() => {
        mockOnChange = jest.fn();
        const props = {
            mockOnChange: mockOnChange
        }
        wrapper = shallow(<Contact {...props} />);
    });
    it('first assertion', () => {

        wrapper.find('input').at(0).simulate('change', {
            preventDefault: () => { },
            target: { value: 'test' }
        })
        expect(mockOnChange).toBeCalledWith("test");
    })

    it('should call onChange prop', () => {
        const event = {
            preventDefault: () => { },
            target: {
                name: 'fullName',
                value: 'adi'
            }
        };
        const component = shallow(<Contact onChange={mockOnChange} />);
        component.find('input').at(0).props().onChange('change', event);
        expect(mockOnChange).toBeCalledWith('adi');
    });
})

*/



/*describe('', () => {
    let wrapper;
    let mockHandleClick = jest.fn();
    beforeEach(() => {
        const props = {
            mockHandleClick: mockHandleClick
        }
        wrapper = shallow(<Contact {...props} />)
    });
    it('', () => {
        let callback = mockHandleClick.mock.calls.length;
        wrapper.find('button').props().onClick();
        expect(mockHandleClick).toHaveBeenCalled();
        expect(callback).toBe(1);
    })

})

/*
describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Contact onClick={() => { console.warn('I was clicked'); }}></Contact >))
        button.find('.button').simulate("click");
    });

      it('second try', () => {
        const callback = mockFunc.mock.calls.length;
        expect(callback).toEqual(0);
        expect(wrapper.find('button').at(0).hasClass('btn-dark')).toEqual(true);
        // console.log(<Contact onClick={mockFunc} />)
        wrapper.find('button').at(0).simulate('Click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('submit');
        wrapper.find('button').at(0).simulate('Submit');


        console.log(callback);



    })
});

describe(" https://www.youtube.com/watch?v=1cnfbcwkoeg ", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {
            handleClick: mockFunc
        };
        wrapper = shallow(<Contact {...props} />);
    })
    it("shoud pass", () => {
        expect(wrapper.find("button").length).toBe(1);
    })
    it("should trigger a callback on click event", () => {
        const btn = wrapper.find("button");
        btn.simulate('click', {

           v

        });
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })
})
/*describe("official docs", () => {
    //const wrapper = shallow(<Contact />)   
    const preventDefault = jest.fn();
    const wrapper = shallow(<Contact handleClick={() => { }} />);
    it("", () => {

        //expect(wrapper.find('.btn-dark').length).toEqual(1);

        wrapper.find('button').simulate('submit', { preventDefault });
        expect(preventDefault).toHaveBeenCalled();
    })

    /*   it("btn shit", () => {
           let mockHandler = jest.fn();
           let wrapper = shallow(<Contact submit={mockHandler} />)
           expect(mockHandler).not.toHaveBeenCalled();
           //        console.log(wrapper.debug());
           let btn = wrapper.find('button').at(0);
           expect(btn.length).toEqual(1);
           console.log(btn);
           //btn.simulate('Click');
           btn.simulate('submit', {
               preventDefault: () => { }
           });
           btn.simulate('click', {
               preventDefault: () => { }
           });
           btn.simulate('Click', {
               preventDefault: () => { }
           });
           expect(mockHandler.mock.calls.length).toEqual(1);
           //expect(mockHandler.mock.calls.length).toBe(1);
           //expect(mockHandler).toHaveBeenCalledTimes(0);
           //expect(mockHandler).toBeCalledWith(expect.anything());
           //(mockHandler).toHaveBeenCalledTimes(1);
   
       })
})

describe("fucking shit", () => {
    it("must call the mock method with button click", () => {
        let spy = jest.spyOn(Contact.prototype, 'handleClick')
            .mockImplementationx(...x => x)

        const wrapper = shallow(<Contact />)
        const btn = wrapper.find("button")
        btn.simulate("click")
        expect(spy).toHaveBeenCalled()
    })
})
describe("simulate button and api call", () => {
    let wrapper;
    let mockHandleClick

    beforeEach(() => {
        mockHandleClick = jest.fn();
        wrapper = shallow(<Contact handleClick={mockHandleClick} />)
    })
    it("should simulate button and the call to the handler function", () => {
        expect(mockHandleClick).not.toHaveBeenCalled();
        expect(wrapper.find("button")).toHaveLength(1);
        let btn = wrapper.find('button');

        btn.simulate('click', {
            preventDefault: () => { }
        });
        console.log(btn.debug());
        //expect(mockHandleClick).toHaveBeenCalled();
        not working this is what used in Test driven development using react 
         expect(mockHandleClick.mock.calls.length).toEqual(1);
        //expect(mockHandleClick).length.toEqual(1);
        //expect(callback).toBe(1);
        //expect(callback).toHaveBeenCalled();
        //expect(trail.find("button").prop("onClick")).toHaveBeenCalledTimes(1);
        //expect({ handleClick }).toHaveBeenCalledTimes(1);
        //wrapper.find('button').props().onClick().simulate('click');
        //expect(handlerMock).toBeCalled(); 
        //wrapper.instance().handleClick;
    })
})
*/


/*  

        /*it("fnjhf", () => {
        expect(wrapper.find("button")).toHaveLength(1);
        wrapper.find('button').simulate('click');

        expect(wrapper.find("button").prop("onClick")).toHaveBeenCalledTimes();
        expect({ handleClick }).toHaveBeenCalledTimes();

    })
    it("should simulate api call", () => {
        expect(mockFunc).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        wrapper.find('button').props().onClick();
        expect(mockFunc).toHaveBeenCalled();
        //expect(mockFunc.mock.calls.length).toBe(1)n
        //  wrapperA.instance().handlerMock();
        //expect(handlerMock).toBeCalled(); 
        //expect(wrapperA.find('a').at(0).prop('onClick'));
        //expect(wrapper.find('a').at(0).prop('onClick'));

          const handlerMock = jest.fn();
             const wrapper = shallow(<Contact onClickHandler={handlerMock} />);
             wrapper.find('button').simulate('click');
             expect(handlerMock).toHaveBeenCalledTimes(1);
                
})


describe("Executes a handler function", () => {
    it("must call the mock method with button click", () => {
        const wrapper = shallow(<Contact />);
        const button = wrapper.find("button");
        const instance = wrapper.instance();
        instance.onClick = jest.fn(instance.onClick);
        button.simulate("click");
        expect(instance.onClick).toHaveBeenCalled();
    });
});

*/