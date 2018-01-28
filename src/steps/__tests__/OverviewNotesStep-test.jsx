const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import OverviewNotesStep from '../OverviewNotesStep';

describe('STEPS - OverviewNotesStep', () => {

    var component;
    var renderedElts;

    it('should display a list of existing notes', () =>
    {
        component = TestUtils.renderIntoDocument(
            <OverviewNotesStep
            />
        );
    });

    it('should go back to login step on logout button click', () =>
    {
        // @todo
    });

    it('should go to read step on note row click', () =>
    {
        // @todo
    });

});