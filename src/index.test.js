import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as fetch from 'isomorphic-fetch'; // eslint-disable-line

import NetworkStateNotifier from './index';

configure({ adapter: new Adapter() });

describe('<NetworkStateNotifier /> poll check', () => {
  const wrapper = shallow(<NetworkStateNotifier />);

  test('isOnline should be true if resolve is true', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    wrapper.setState({ polling: true, isOnline: false });
    setTimeout(() => {
      expect(wrapper.state().isOnline).toEqual(navigator.onLine);
      done();
    }, 3000);
  });
});

describe('<NetworkStateNotifier /> props check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NetworkStateNotifier
        containerClassName="myContainer"
        pollInterval={500}
        notificationTimeout={2000}
      />,
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should have the className passed to it', () => {
    expect(wrapper.props().className).toEqual('myContainer');
  });

  it('should remove message after the passed time', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(0);
      done();
    }, 4000);
  });
});

describe('<NetworkStateNotifier /> online check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NetworkStateNotifier />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should have an Interval set when mounted', () => {
    expect(wrapper.state().checker).toBeDefined();
  });

  it('should have isOnline true when system is online', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    setTimeout(() => {
      expect(wrapper.state().isOnline).toEqual(navigator.onLine);
      done();
    }, 1000);
  });

  it('should not have any messages in state if status is unchanged', (done) => {
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(0);
      done();
    }, 4000);
  });
});

describe('<NetworkStateNotifier /> offline check', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NetworkStateNotifier />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should have isOnline set to false when system is offline', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: false,
    });
    setTimeout(() => {
      expect(wrapper.state().isOnline).toEqual(navigator.onLine);
      done();
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

  afterEach(() => {
    wrapper = null;
  });

  it('should render a message when status is changed', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    setTimeout(() => {
      expect(wrapper.state().messages.length).toEqual(1);
      done();
    }, 1000);
  });

  it('should render 2 messages on immediate change', (done) => {
    Object.defineProperty(navigator, 'onLine', {
      configurable: true,
      value: true,
    });
    setTimeout(() => {
      Object.defineProperty(navigator, 'onLine', {
        configurable: true,
        value: false,
      });
      setTimeout(() => {
        try {
          expect(wrapper.state().messages.length).toEqual(2);
          done();
        } catch (err) {
          done.fail(err);
        }
      }, 1000);
    }, 1000);
  });
});

describe('<NetworkStateNotifier /> unmount check', () => {
  const wrapper = shallow(<NetworkStateNotifier />);

  it('should remove the checker after unmount', () => {
    wrapper.unmount();
    expect(wrapper.html()).toBeNull();
  });
});
