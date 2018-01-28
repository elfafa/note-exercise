const testLib = require('../../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CommentsList from '../CommentsList';

describe('COMPONENTS - CommentsList', () => {

    var component;
    var renderedElts;

    it('should display given comments', () =>
    {
        component = TestUtils.renderIntoDocument(
            <CommentsList
                comments={ testLib().comments }
            />
        );
        renderedElts = () => ReactDOM.findDOMNode(component).querySelectorAll("#listing > div");
        expect(renderedElts().length).toEqual(3);
    });

});