import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Message from './message'

configure({adapter: new Adapter()})

describe('<Message />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Message message="Test message" color="rgba(0,0,0,0.5)" />)
    })

    it('should have a class of HideNSeek-message', () => {
        expect(wrapper.hasClass('HideNSeek-message')).toBeTruthy();
    })

    it('should have the text passed in the props', () => {
        expect(wrapper.text()).toEqual("Test message")
    })

    it('should receive a color code or description as color prop', () => {
        expect(wrapper.prop("color")).toEqual("rgba(0,0,0,0.5)")
    })

})