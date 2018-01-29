const testLib = require('../../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import NotesList from '../NotesList';

describe('COMPONENTS - NotesList', () => {

    var component;
    var updateCurrentNote = function(){};

    it('should display given notes', () =>
    {
        component = mount(
            <NotesList
                notes={ testLib().notes }
            />
        );
        expect(component.find("table tbody tr").length).toEqual(2);
    });

    it('should change the current note on click', (done) =>
    {
        updateCurrentNote = function(note) {
            expect(note.id).toEqual(1);
            done();
        }
        component = mount(
            <NotesList
                notes={ testLib().notes }
                updateCurrentNote={ updateCurrentNote }
            />
        );
        component.find("table tbody tr").first().simulate('click');
    });

});