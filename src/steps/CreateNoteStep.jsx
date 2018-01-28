import React from 'react';
var createReactClass = require('create-react-class');
import NoteComponent from './components/NoteComponent';

const MIN_CHAR = 4;

/**
 * Manage login step
 */
var CreateNoteStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'noteTitle'  : '',
            'noteComment': '',
        };
    },

    /**
     * Update state.noteTitle with input event
     */
    setNoteTitle(event)
    {
        this.setState({ 'noteTitle': event.target.value });
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
        this.refs.notes.addNote(this.state.noteTitle, this.state.noteComment);
        this.doCancel();
    },

    /**
     * Cancel creation (clean state + return to overview step)
     */
    doCancel()
    {
        this.setState({
            'noteTitle'  : '',
            'noteComment': ''
        });
        this.props.updateSpecialPage('overview');
    },

    /**
     * Get class for login button
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.noteTitle.length && MIN_CHAR <= this.state.noteComment.length);
        var btnClass  = 'btn btn-success pull-right';
        if (! isEnabled) {
            btnClass += ' disabled';
        }
        return btnClass;
    },

    /**
     * Display login form
     */
    render()
    {
        return (
            <div className="main" id="createNoteStep">
                <h3>New note</h3>
                <div id="login">
                    <form>
                        <div className="form-group col-md-6">
                            <label className="control-label required">Title</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="title" name="noteTitle" value={ this.state.noteTitle } onChange={ this.setNoteTitle } required />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="control-label required">Note</label>
                            <div className="col-sm-12">
                                <textarea className="form-control" id="content" name="noteComment" value={ this.state.noteComment } onChange={ this.setNoteComment } required />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="btn btn-default" onClick={ this.doCancel }>
                                Cancel
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className={ this.getButtonClassName() } onClick={ this.doSubmit }>
                                Add Note
                            </div>
                        </div>
                    </form>
                </div>
                <NoteComponent ref="notes" />
            </div>
        );
    }
});

module.exports = CreateNoteStep;