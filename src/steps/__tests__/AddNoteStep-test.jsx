const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import AddNoteStep from '../AddNoteStep';

describe('STEPS - AddNoteStep', () => {

    var component;
    var renderedElts;

    it('should display a form and a list of existing comments', () =>
    {
        component = TestUtils.renderIntoDocument(
            <AddNoteStep
                currentNote={ testLib().note }
            />
        );
    });

    it('should go back to read step on return button click', () =>
    {
        // @todo
    });

    it('should disable submit button until form is filled', () =>
    {
        // @todo
    });

    it('should save new comment and go back to read step on submit button click', () =>
    {
        // @todo
    });

});