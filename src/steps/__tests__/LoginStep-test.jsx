const testLib = require('../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import LoginStep from '../LoginStep';

describe('STEPS - LoginStep', () => {

    var component;
    var renderedElts;

    it('should display a form', () =>
    {
        component = TestUtils.renderIntoDocument(
            <LoginStep
            />
        );
    });

    it('should disable submit button until form is filled', () =>
    {
        // @todo
    });

    it('should save user and go to overview step on submit button click', () =>
    {
        // @todo
    });

});