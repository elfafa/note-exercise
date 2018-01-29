const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ReadNoteStep from '../ReadNoteStep';

describe('STEPS - ReadNoteStep', () => {

    var component;
    var updateSpecialPage = function(){};

    it('should display a list of existing comments', () =>
    {
        component = mount(
            <ReadNoteStep
                currentNote={ testLib().note }
            />
        );
        expect(component.find('#listing > div').length).toEqual(1);
    });

    it('should go back to overview step on return button click', (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('overview');
            done();
        }
        component = mount(
            <ReadNoteStep
                currentNote={ testLib().note }
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find(".btn.btn-default").simulate('click');
    });

    it('should go to add step on add note click', (done) =>
    {
        updateSpecialPage = function(page) {
            expect(page).toEqual('add');
            done();
        }
        component = mount(
            <ReadNoteStep
                currentNote={ testLib().note }
                updateSpecialPage={ updateSpecialPage }
            />
        );
        component.find(".btn.btn-success").simulate('click');
    });

});