const testLib = require('../../../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import CommentsList from '../CommentsList';

describe('COMPONENTS - CommentsList', () => {

    var component;

    it('should display given comments', () =>
    {
        component = mount(
            <CommentsList
                comments={ testLib().comments }
            />
        );
        expect(component.find("#listing > div").length).toEqual(3);
    });

});