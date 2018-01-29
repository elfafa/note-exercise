const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import CreateNoteStep from '../CreateNoteStep';

describe('STEPS - CreateNoteStep', () => {

    var component;
    var updateCurrentNote = function(){};
    var updateSpecialPage = function(){};

    it('should display a form', () =>
    {
        component = mount(
            <CreateNoteStep />
        );
        expect(component.find("form input").length).toEqual(1);
        expect(component.find("form textarea").length).toEqual(1);
    });

    it('should go back to overview step on cancel button click', (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('overview');
            done();
        }
        component = mount(
            <CreateNoteStep
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find(".btn.btn-default").simulate('click');
    });

    it('should disable submit button until form is correctly filled', async () =>
    {
        component = mount(
            <CreateNoteStep
                currentNote={ testLib().note }
            />
        );
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
        component.find('#title').simulate('change', { 'target': { 'value': "new title" } });
        await component.instance().componentDidMount();
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
        component.find('#title').simulate('change', { 'target': { 'value': "" } });
        component.find('#content').simulate('change', { 'target': { 'value': "new comment" } });
        await component.instance().componentDidMount();
        expect(component.find('.btn.btn-success.disabled').length).toEqual(1);
    });

    it('should save new note and go back to overview step on submit button click', async (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('overview');
            done();
        }
        component = mount(
            <CreateNoteStep
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find('#title').simulate('change', { 'target': { 'value': "new title" } });
        component.find('#content').simulate('change', { 'target': { 'value': "new comment" } });
        component.find(".btn.btn-success").simulate('click');
        // @todo: missing test of new note in localStorage
    });

});