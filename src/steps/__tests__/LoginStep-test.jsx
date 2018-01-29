const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import LoginStep from '../LoginStep';

describe('STEPS - LoginStep', () => {

    var component;
    var updateCurrentUser = function(){};

    it('should display a form', () =>
    {
        component = mount(
            <LoginStep />
        );
        expect(component.find("form input").length).toEqual(2);
        expect(component.find("form input[type='password']").length).toEqual(1);
    });

    it('should disable submit button until form is correctly filled', async () =>
    {
        component = mount(
            <LoginStep />
        );
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
        component.find('#username').simulate('change', { 'target': { 'value': "username" } });
        await component.instance().componentDidMount();
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
        component.find('#username').simulate('change', { 'target': { 'value': "" } });
        component.find('#password').simulate('change', { 'target': { 'value': "password" } });
        await component.instance().componentDidMount();
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
    });

    it('should save user and go to overview step on submit button click', async (done) =>
    {
        updateCurrentUser = function(user) {
            expect(user).toEqual('username');
            done();
        }
        component = mount(
            <LoginStep
                updateCurrentUser={ updateCurrentUser }
            />
        );
        component.find('#username').simulate('change', { 'target': { 'value': "username" } });
        component.find('#password').simulate('change', { 'target': { 'value': "password" } });
        component.find(".btn.btn-success").simulate('click');
    });

});