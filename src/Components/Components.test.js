import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./Home";
import Login from "./Login"
import Message from "./Message"
import Navbar from "./Navbar"
import Register from "./Register"
import UsersOnly from "./UsersOnly"
import "../setupTests"
import { act } from 'react-dom/test-utils';
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import AuthProvider from "../Context/AuthContext";
import {T, initLang} from "../translation";
import {render, cleanup, getByTestId, getByText, screen, fireEvent, getByPlaceholderText} from '@testing-library/react'

beforeAll(async () => {
    await initLang();
})



describe("<Home/>", () => {
    it("renders correctly", () => {
        shallow(<Home/>);
    });

    it ("renders header", () => {
        let wrapper = shallow(<Home/>);
        const header = <h1>{T("title.homePage")}</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })
})

describe("<Login>", () => {
    it ("renders correctly", () => {
        shallow(<Login/>);
    })

    it ("renders header", () => {
        let wrapper = shallow(<Login/>)
        const header = <h3>{T("title.signin")}</h3>
        expect(wrapper.contains(header)).toEqual(true)
    })
})

describe("Login functionality", () => {
    it("Should change email correctly onChange", () => {
        let tree = null
        let emailInput = null;
        act(() => {
            tree = mount(<Login/>)
            emailInput = tree.find("input[name='email']");

            emailInput.simulate('change', {
                persist: () => {},
                target: {
                  name: 'email',
                  value: 'email@gmail.com'
                }
              });
        })

        expect(emailInput.html()).toMatch('email@gmail.com');
    })
    it("Should change password correctly onChange", () => {
        let tree = null
        let passwordInput = null;
        act(() => {
            tree = mount(<Login/>)
            passwordInput = tree.find("input[name='password']")
    
            passwordInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'password',
                    value: 'password'
                }
            })
        })

        expect(passwordInput.html()).toMatch('password')
    })
})

describe("Message", () => {
    it ("renders correctly", () => {
        let props = {message:{msgBody:"test"}}
        shallow(<Message {...props}/>)
    })
})

describe("Navbar", () => {
    it ('renders correctly', () => {
        render(<AuthProvider><Navbar/></AuthProvider>)
    })
})

describe('Register', () => {
    it ('render correctly', () => {
        render(<Register/>)
    })
    it("Should change firstName correctly onChange", () => {
        let tree = null
        let firstNameInput = null;

        act(() => {
            tree = mount(<Register/>)

            firstNameInput = tree.find("input[name='firstName']")
    
            firstNameInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'firstName',
                    value: 'firstName'
                }
            })
        })

        expect(firstNameInput.html()).toMatch('firstName')
    })
    it("Should change lastName correctly onChange", () => {
        let tree = null
        let lastNameInput = null;

        act(() => {
            tree = mount(<Register/>)
        
            lastNameInput = tree.find("input[name='lastName']")
    
            lastNameInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'lastName',
                    value: 'lastName'
                }
            })
        })

        expect(lastNameInput.html()).toMatch('lastName')
    })
    it("Should change email correctly onChange", () => {
        let tree = null
        let emailInput = null;

        act(() => {
            tree = mount(<Register/>)
        
            emailInput = tree.find("input[name='email']")
    
            emailInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'email',
                    value: 'email'
                }
            })
        })

        expect(emailInput.html()).toMatch('email')
    })
    it("Should change username correctly onChange", () => {
        let tree = null
        let userInput = null;

        act(() => {
            tree = mount(<Register/>)
        
            userInput = tree.find("input[name='username']")
    
            userInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'user',
                    value: 'user'
                }
            })
        })

        expect(userInput.html()).toMatch('user')
    })
    it("Should change password correctly onChange", () => {
        let tree = null
        let passwordInput = null;

        act(() => {
            tree = mount(<Register/>)
        
            passwordInput = tree.find("input[name='password']")
    
            passwordInput.simulate('change', {
                persists: () => {},
                target: {
                    name: 'password',
                    value: 'password'
                }
            })
        })

        expect(passwordInput.html()).toMatch('password')
    })
})

describe("UsersOnly", () => {
    it ('renders correctly', () => {
        render(<UsersOnly/>)
    })

    it ("renders header", () => {
        let wrapper = shallow(<UsersOnly/>);
        const header = <h1>{T("title.usersonly")}</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })
})
