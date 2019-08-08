import React from 'react'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HideNSeek from './index'

configure({adapter: new Adapter()})

describe('<HideNSeek /> online check', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<HideNSeek />)
    })

    it('should have an Interval set when mounted', () => {
        expect(wrapper.state().hideNSeekChecker).toBeDefined()
    })

    it('should have isOnline true when system is online', () => {
        Object.defineProperty(navigator, 'onLine', {
            configurable: true,
            value: true
          })
        expect(wrapper.state().hideNSeekIsOnline).toBeTruthy()
    })
})

describe('<HideNSeek /> offline check', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<HideNSeek />)
    })

    it('should have isOnline set to false when system is offline', () => {
        Object.defineProperty(navigator, 'onLine', {
            configurable: true,
            value: false
        })
        expect(navigator.onLine).toBeFalsy()
    })
})
