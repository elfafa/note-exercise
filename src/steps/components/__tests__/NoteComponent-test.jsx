const testLib = require('../../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import NoteComponent from '../NoteComponent';

describe('COMPONENTS - NoteComponent', () => {

    var component;
    var renderedElts;

    it('should return list of notes', () =>
    {
        component = TestUtils.renderIntoDocument(
            <NoteComponent />
        );
        expect(component.getNotes().length).toEqual(2);
    });

    it('should add note in the list of notes', () =>
    {
        component = TestUtils.renderIntoDocument(
            <NoteComponent />
        );
        component.addNote('new note title', 'new note comment');
        expect(component.getNotes().length).toEqual(3);
    });

    it('should add comment in existing note', () =>
    {
        component = TestUtils.renderIntoDocument(
            <NoteComponent />
        );
        var note = component.addComment(1, 'new note comment 1');
        expect(note.comments.length).toEqual(2);
        var note = component.addComment(1, 'new note comment 2');
        expect(note.comments.length).toEqual(3);
    });

});