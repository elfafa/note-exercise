import React from 'react';
var createReactClass = require('create-react-class');

import CommentsList from './components/CommentsList';
import NoteComponent from './components/NoteComponent';

const MIN_CHAR = 4;

/**
 * Manage add note step
 */
var AddNoteStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'comment': '',
        };
    },

    /**
     * Update state.comment with input event
     */
    setNoteComment(event)
    {
        this.setState({ 'comment': event.target.value });
    },

    /**
     * Launch creation process (create entry + return to overview step)
     */
    doSubmit()
    {
        var note = this.refs.notes.addComment(this.props.currentNote.id, this.state.comment);
        this.props.updateCurrentNote(note);
        this.doCancel();
    },

    /**
     * Cancel creation (clean state + return to overview step)
     */
    doCancel()
    {
        this.setState({ 'comment': '' });
        this.props.updateSpecialPage('read');
    },

    /**
     * Get class for submit button (disabled if form invalid)
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.comment.length);
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
                        <textarea className="form-control" id="content" name="comment" value={ this.state.comment } onChange={ this.setNoteComment } required />
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