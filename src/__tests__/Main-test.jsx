const testLib = require('../test-lib');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

import Main from '../Main';

describe('ROOT - Main', () => {

    var component;
    var renderedElt;

    it('should display login step if none current user', () =>
    {
        component = mount(
            <Main />
        );
        expect(component.html()).toMatch(/login/);
    });

    it('should display overview step if current user and no current note', () =>
    {
        component = TestUtils.renderIntoDocument(
            <Main />
        );
        component.updateCurrentUser('username');
        renderedElt = ReactDOM.findDOMNode(component);
        expect(renderedElt.textContent).toMatch(/notes overview/i);
    });

    it('should display create step if current user and no current note and special page create', () =>
    {
        component = TestUtils.renderIntoDocument(
            <Main />
        );
        component.updateCurrentUser('username');
        component.updateSpecialPage('create');
        renderedElt = ReactDOM.findDOMNode(component);
        expect(renderedElt.textContent).toMatch(/new note/i);
    });

    it('should display read step if current user and current note and special page read', () =>
    {
        component = TestUtils.renderIntoDocument(
            <Main />
        );
        component.updateCurrentUser('username');
        component.updateCurrentNote(testLib().note);
        component.updateSpecialPage('read');
        renderedElt = ReactDOM.findDOMNode(component);
        expect(renderedElt.textContent).toMatch(/fake note 1/i);
    });

    it('should display add step if current user and current note and special page add', () =>
    {
        component = TestUtils.renderIntoDocument(
            <Main />
        );
        component.updateCurrentUser('username');
        component.updateCurrentNote(testLib().note);
        component.updateSpecialPage('add');
        renderedElt = ReactDOM.findDOMNode(component);
        expect(renderedElt.textContent).toMatch(/fake note 1/i);
        expect(ReactDOM.findDOMNode(component).querySelectorAll("textarea").length).toEqual(1);
    });

});