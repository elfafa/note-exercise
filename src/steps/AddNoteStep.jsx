import React from 'react';
var createReactClass = require('create-react-class');

import CommentsList from './components/CommentsList';
import NoteComponent from './components/NoteComponent';

const MIN_CHAR = 4;

/**
 * Manage read step
 */
var AddNoteStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'noteComment': '',
        };
    },

    /**
     * Update state.noteComment with input event
     */
    setNoteComment(event)
    {
        this.setState({ 'noteComment': event.target.value });
    },

    /**
     * Launch creation process (create entry + return to overview step)
     */
    doSubmit()
    {
        var note = this.refs.notes.addComment(this.props.currentNote.id, this.state.noteComment);
        console.log(note);
        this.props.updateCurrentNote(note);
        this.doCancel();
    },

    /**
     * Cancel creation (clean state + return to overview step)
     */
    doCancel()
    {
        this.setState({ 'noteComment': '' });
        this.props.updateSpecialPage('read');
    },

    /**
     * Get class for login button
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.noteComment.length);
        var btnClass  = 'btn btn-success pull-right';
        if (! isEnabled) {
            btnClass += ' disabled';
        }
        return btnClass;
    },

    /**
     * Display list of notes
     */
    render()
    {
        return (
            <div className="main row" id="addStep">
                <h3 className="col-xs-12">{ this.props.currentNote.title }</h3>
                <form>
                    <div className="form-group col-xs-12">
                        <textarea className="form-control" id="content" name="noteComment" value={ this.state.noteComment } onChange={ this.setNoteComment } required />
                    </div>
                </form>
                <div className="col-xs-6">
                    <div className="btn btn-default" onClick={ this.doCancel }>
                        Cancel
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className={ this.getButtonClassName() } onClick={ this.doSubmit }>
                        Add note
                    </div>
                </div>
                <CommentsList comments={ this.props.currentNote.comments } />
                <NoteComponent ref="notes" />
            </div>
        );
    }
});

module.exports = AddNoteStep;