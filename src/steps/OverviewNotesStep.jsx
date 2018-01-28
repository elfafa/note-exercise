import React from 'react';
import NotesList from './components/NotesList';
var createReactClass = require('create-react-class');

/**
 * Manage overview step
 */
var OverviewNotesStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
        };
    },

    /**
     * Launch logout process (reset user)
     */
    doLogout()
    {
        this.props.updateCurrentUser('');
    },

    /**
     * Display list of notes
     */
    render()
    {
        return (
            <div className="main row" id="overviewStep">
                <h3 className="col-xs-8">Notes overview</h3>
                <div className="col-xs-4">
                    <div className="btn btn-link pull-right" onClick={ this.doLogout }>
                        Logout
                    </div>
                </div>
                <div id="overview">
                    <NotesList
                        updateCurrentNote={ this.props.updateCurrentNote }
                        updateSpecialPage={ this.props.updateSpecialPage }
                    />
                </div>
            </div>
        );
    }
});

module.exports = OverviewNotesStep;