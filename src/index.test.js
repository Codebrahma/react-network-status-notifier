import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NetworkStateNotifier from './index';

configure({ adapter: new Adapter() });

describe('<NetworkStateNotifier /> online check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NetworkStateNotifier />);
  });

  it('should have an Interval set when mounted', () => {
    expect(wrapper.state().checker).toBeDefined();
  });

  it('should have isOnline true when system is online', () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    expect(wrapper.state().isOnline).toBeTruthy();
  });
});

describe('<NetworkStateNotifier /> offline check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NetworkStateNotifier />);
  });

  it('should have isOnline set to false when system is offline', () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    setTimeout(() => {
      expect(wrapper.state().isOnline).toBeFalsy();
    }, 1000);
  });
});

describe('<NetworkStateNotifier /> messages check', () => {
  let wrapper;
  beforeEach(() => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    wrapper = shallow(<NetworkStateNotifier />);
  });

  it('should render a message when status is changed', () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(1);
    }, 1000);
  });

  it('should render 2 messages on immediate change', () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(2);
    }, 1000);
  });
});

describe('<NetworkStateNotifies /> props check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NetworkStateNotifier
        containerClassName="myContainer"
        pollInterval={500}
        notificationTimeout={2000}
      />
    );
  });

  it('should have the className passed to it', () => {
    expect(wrapper.props().className).toEqual('myContainer');
  });

  it('should poll according to the duration passed', () => {
    setTimeout(() => expect(wrapper.state().checker).toBeCalledTimes(2), 1000);
  });

  it('should remove message after the passed time', () => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(0);
    }, 2000);
  });
});
