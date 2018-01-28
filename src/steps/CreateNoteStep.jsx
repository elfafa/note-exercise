import React from 'react';
var createReactClass = require('create-react-class');

import NoteComponent from './components/NoteComponent';

const MIN_CHAR = 4;

/**
 * Manage create note step
 */
var CreateNoteStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'title'  : '',
            'comment': '',
        };
    },

    /**
     * Update state.title with input event
     */
    setTitle(event)
    {
        this.setState({ 'title': event.target.value });
    },

    /**
     * Update state.comment with input event
     */
    setComment(event)
    {
        this.setState({ 'comment': event.target.value });
    },

    /**
     * Launch creation process (create entry + return to overview step)
     */
    doSubmit()
    {
        this.refs.notes.addNote(this.state.title, this.state.comment);
        this.doCancel();
    },

    /**
     * Cancel creation (clean state + return to overview step)
     */
    doCancel()
    {
        this.setState({
            'title'  : '',
            'comment': ''
        });
        this.props.updateSpecialPage('overview');
    },

    /**
     * Get class for submit button (disabled if form invalid)
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.title.length && MIN_CHAR <= this.state.comment.length);
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
                                <input type="text" className="form-control" id="title" name="title" value={ this.state.title } onChange={ this.setTitle } required />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="control-label required">Note</label>
                            <div className="col-sm-12">
                                <textarea className="form-control" id="content" name="comment" value={ this.state.comment } onChange={ this.setComment } required />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="btn btn-default" onClick={ this.doCancel }>
                                Cancel
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className={ this.getButtonClassName() } onClick={ this.doSubmit }>
                                Add<span className="hidden-xxxs"> Note</span>
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