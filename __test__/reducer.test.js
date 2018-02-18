import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';
import raf from '../client/lib/tempPolyfills';

import reducer from '../client/reducers/authReducer';

Enzyme.configure({ adapter: new Adapter() });

let initialState = {
    loggedIn: false
}

test('Test that INIT will make loggedIn false when no cookie exists', () => {
    let action = {type: 'INIT', payload: false};
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(false);
});

test('Test that loggedIn will change to true when passed by payload', () => {
    let action = {type: 'INIT', payload: true};
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(true);
});

test('Test that loggedIn will change to false when SIGNOUT is called', () => {

    let inititalState = {
        loggedIn: true
    }

    let action = {type: 'SIGNOUT', payload: null}
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(false);
});

test('Test that signin changes loggedIn to true when given an authenticated creds', () => {
  let initialState = {
    loggedIn: false
  };

  let action = {type: 'SIGNIN', payload: {
      authenticated: true,
      message: "Signed in successfully"
  }};

  let state = reducer(initialState, action);

  expect(state.loggedIn).toEqual(action.payload.authenticated);

});
