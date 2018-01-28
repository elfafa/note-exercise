import React from 'react';
import LoginStep from './steps/LoginStep';
import OverviewNotesStep from './steps/OverviewNotesStep';
import CreateNoteStep from './steps/CreateNoteStep';
import AddNoteStep from './steps/AddNoteStep';
import ReadNoteStep from './steps/ReadNoteStep';
import './css/Main.css';
var createReactClass = require('create-react-class');

const STEP_LOGIN    = 1;
const STEP_OVERVIEW = 2;
const STEP_CREATE   = 3;
const STEP_ADD      = 4;
const STEP_READ     = 5;

/**
 * Display main layout
 */
var Main = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'currentUser': localStorage.getItem('currentUser'), // user name (empty if not logged)
            'currentNote': localStorage.getItem('currentNote'), // infos of current note
            'currentStep': localStorage.getItem('currentStep'), // which page are we on?
            'specialPage': '', // to switch from a step to another
        };
    },

    /**
     * Update current step after each update
     */
    componentDidUpdate()
    {
        var newStep = null;
        if (! this.state.currentUser) {
            newStep = STEP_LOGIN;
        } else if (! this.state.currentNote) {
            newStep = STEP_OVERVIEW;
        } else {
            switch (this.state.specialPage) {
                case 'create': newStep = STEP_CREATE; break;
                case 'add'   : newStep = STEP_ADD; break;
                default      : newStep = STEP_READ; break;
            }
        }
        if (this.state.currentStep !== newStep) {
            localStorage.setItem('currentStep', newStep);
            this.setState({ 'currentStep': newStep });
        }
    },

    /**
     * Update state.currentUser
     */
    updateCurrentUser(user)
    {
        localStorage.setItem('currentUser', user);
        this.setState({ 'currentUser': user });
    },

    /**
     * Update state.currentNote
     */
    updateCurrentNote(note)
    {
        localStorage.setItem('currentNote', note);
        this.setState({ 'currentNote': note });
    },

    /**
     * Update state.specialPage
     */
    updateSpecialPage(page)
    {
        this.setState({ 'specialPage': page });
    },

    /**
     * Display elements
     */
    render()
    {
        switch (parseInt(this.state.currentStep)) {
            case STEP_OVERVIEW:
                return (<OverviewNotesStep
                            updateCurrentUser={ this.updateCurrentUser }
                            updateCurrentNote={ this.updateCurrentNote }
                            updateSpecialPage={ this.updateSpecialPage }
                        />);
            case STEP_CREATE:
                return (<CreateNoteStep
                            updateCurrentNote={ this.updateCurrentNote }
                            updateSpecialPage={ this.props.updateSpecialPage }
                        />);
            case STEP_ADD:
                return (<AddNoteStep
                            updateSpecialPage={ this.props.updateSpecialPage }
                        />);
            case STEP_READ:
                return (<ReadNoteStep
                            updateSpecialPage={ this.props.updateSpecialPage }
                        />);
            default:
                return (<LoginStep
                            updateCurrentUser={ this.updateCurrentUser }
                        />);
        }
    }
});

module.exports = Main;