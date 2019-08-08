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
        setTimeout(() => {
            expect(wrapper.state().hideNSeekIsOnline).toBeFalsy()
        }, 1000)
    })
})

describe('<HideNSeek /> messages check', () => {
    let wrapper
    beforeEach(() => {
        Object.defineProperty(navigator, 'onLine', {
            configurable: true,
            value: false
        })
        wrapper = mount(<HideNSeek />)
    })

    it('should render a message when status is changed', () => {
        Object.defineProperty(navigator, 'onLine', {
            configurable: true,
            value: true
        })
        setTimeout(() => {
            expect(wrapper.state().hideNSeekMessages.length).toBeGreaterThanOrEqual(1)
        }, 1000)
    })
})
