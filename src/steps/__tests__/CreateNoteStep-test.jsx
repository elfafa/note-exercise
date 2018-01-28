const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CreateNoteStep from '../CreateNoteStep';

describe('STEPS - CreateNoteStep', () => {

    var component;
    var renderedElts;

    it('should display a form', () =>
    {
        component = TestUtils.renderIntoDocument(
            <CreateNoteStep
            />
        );
    });

    it('should go back to overview step on cancel button click', () =>
    {
        // @todo
    });

    it('should disable submit button until form is filled', () =>
    {
        // @todo
    });

    it('should save new note and go back to overview step on submit button click', () =>
    {
        // @todo
    });

});