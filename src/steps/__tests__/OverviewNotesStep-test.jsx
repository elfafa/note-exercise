const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import OverviewNotesStep from '../OverviewNotesStep';

describe('STEPS - OverviewNotesStep', () => {

    var component;
    var updateCurrentUser = function(){};
    var updateSpecialPage = function(){};

    it('should display a list of existing notes', () =>
    {
        component = mount(
            <OverviewNotesStep />
        );
        expect(component.find('#overview table tbody tr').length).toEqual(2);
    });

    it('should reset user on logout button click', (done) =>
    {
        updateCurrentUser = function(user) {
            expect(user).toBeNull();
            done();
        }
        component = mount(
            <OverviewNotesStep
                updateCurrentUser={ updateCurrentUser }
            />
        );
        component.find(".btn.btn-link").simulate('click');
    });

    it('should go to create step on create button click', (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('create');
            done();
        }
        component = mount(
            <OverviewNotesStep
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find(".btn.btn-success").simulate('click');
    });

});