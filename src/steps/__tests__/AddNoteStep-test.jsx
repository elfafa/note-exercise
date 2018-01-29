const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import AddNoteStep from '../AddNoteStep';

describe('STEPS - AddNoteStep', () => {

    var component;
    var updateCurrentNote = function(){};
    var updateSpecialPage = function(){};

    it('should display a form and a list of existing comments', () =>
    {
        component = mount(
            <AddNoteStep
                currentNote={ testLib().note }
            />
        );
        expect(component.find("form textarea").length).toEqual(1);
        expect(component.find("#listing .comment").length).toEqual(1);
        expect(component.find("#listing .comment").html()).toMatch(/comment of fake note 1/);
    });

    it('should go back to read step on return button click', (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('read');
            done();
        }
        component = mount(
            <AddNoteStep
                currentNote={ testLib().note }
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find(".btn.btn-default").simulate('click');
    });

    it('should disable submit button until form is correctly filled', () =>
    {
        component = mount(
            <AddNoteStep
                currentNote={ testLib().note }
            />
        );
        expect(component.find(".btn.btn-success.disabled").length).toEqual(1);
    });

    it('should save new comment and go back to read step on submit button click', async (done) =>
    {
        updateCurrentNote = function(note) {
            expect(note.comments.length).toEqual(2);
            expect(note.comments[0].content).toEqual('new comment');
        }
        updateSpecialPage = function(page) {
            expect(page).toEqual('read');
            done();
        }
        component = mount(
            <AddNoteStep
                currentNote={ testLib().note }
                updateSpecialPage={ updateSpecialPage }
                updateCurrentNote={ updateCurrentNote }
            />
        );
        component.find('#content').simulate('change', { 'target': { 'value': "new comment" } });
        await component.instance().componentDidMount();
        component.find(".btn.btn-success").simulate('click');
    });

});