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
import {render, cleanup, getByTestId, getByText, screen, fireEvent, getByPlaceholderText} from '@testing-library/react'

describe("<Home/>", () => {
    it("renders correctly", () => {
        shallow(<Home/>);
    });

    it ("renders header", () => {
        let wrapper = shallow(<Home/>);
        const header = <h1>Home Page</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })
})

describe("<Login>", () => {
    it ("renders correctly", () => {
        shallow(<Login/>);
    })

    it ("renders header", () => {
        let wrapper = shallow(<Login/>)
        const header = <h3>Please sign in</h3>
        expect(wrapper.contains(header)).toEqual(true)
    })
})

describe("Login functionality", () => {
    it("Should change email correctly onChange", () => {
        const utils = render(<Login/>)

        let input = utils.getByLabelText('Email:')

        fireEvent.change(input, { target: { value: 'email' } })
        expect(input.value).toBe('email')
    })
    it("Should change password correctly onChange", () => {
        const utils = render(<Login/>)

        let input = utils.getByLabelText('Password')

        fireEvent.change(input, { target: { value: 'password' } })
        expect(input.value).toBe('password')
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
    it("Should change password correctly onChange", () => {
        const utils = render(<Register/>)

        let input = utils.getByLabelText('First Name:')

        fireEvent.change(input, { target: { value: 'first' } })
        expect(input.value).toBe('first')
    })
    it("Should change password correctly onChange", () => {
        const utils = render(<Register/>)

        let input = utils.getByLabelText('Last Name:')

        fireEvent.change(input, { target: { value: 'last' } })
        expect(input.value).toBe('last')
    })
    it("Should change password correctly onChange", () => {
        const utils = render(<Register/>)

        let input = utils.getByLabelText('Email:')

        fireEvent.change(input, { target: { value: 'email' } })
        expect(input.value).toBe('email')
    })
    it("Should change password correctly onChange", () => {
        const utils = render(<Register/>)

        let input = utils.getByLabelText('Username:')

        fireEvent.change(input, { target: { value: 'user' } })
        expect(input.value).toBe('user')
    })
    it("Should change password correctly onChange", () => {
        const utils = render(<Register/>)

        let input = utils.getByLabelText('Password:')

        fireEvent.change(input, { target: { value: 'password' } })
        expect(input.value).toBe('password')
    })
})

describe("UsersOnly", () => {
    it ('renders correctly', () => {
        render(<UsersOnly/>)
    })

    it ("renders header", () => {
        let wrapper = shallow(<UsersOnly/>);
        const header = <h1>Users Only</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })
})
