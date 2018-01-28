import React from 'react';
import NoteComponent from './components/NoteComponent';
import NotesList from './components/NotesList';
var createReactClass = require('create-react-class');

/**
 * Manage read step
 */
var ReadNoteStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'notes': [],
        };
    },

    /**
     * Update current step after each update
     */
    componentDidMount()
    {
        this.setState({ 'notes': this.refs.notes.getNotes() });
    },

    /**
     * Launch logout process (reset user)
     */
    doLogout()
    {
        this.props.updateCurrentUser(null);
    },

    /**
     * Launch create new note process (change step)
     */
    doCreate()
    {
        this.props.updateSpecialPage('create');
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
                    <NoteComponent ref="notes"/>
                    <NotesList
                        className="col-xs-12"
                        updateCurrentNote={ this.props.updateCurrentNote }
                        updateSpecialPage={ this.props.updateSpecialPage }
                        notes={ this.state.notes }
                    />
                    <div className="col-xs-12">
                        <div className="btn btn-success" onClick={ this.doCreate }>
                            Create a new note >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ReadNoteStep;