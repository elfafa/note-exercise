const testLib = require('../../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import NotesList from '../NotesList';

describe('COMPONENTS - NotesList', () => {

    var component;
    var renderedElts;

    it('should display given notes', () =>
    {
        component = TestUtils.renderIntoDocument(
            <NotesList
                notes={ testLib().notes }
            />
        );
        renderedElts = () => ReactDOM.findDOMNode(component).querySelectorAll("table tbody tr");
        expect(renderedElts().length).toEqual(2);
    });

    it('should change the current note on click', () =>
    {
        // @todo
    });

});