import React from 'react';
var createReactClass = require('create-react-class');

import CommentsList from './components/CommentsList';

/**
 * Manage read note step
 */
var ReadNoteStep = createReactClass(
{
    /**
     * Return to overview (change step)
     */
    doReturn()
    {
        this.props.updateSpecialPage('overview');
    },

    /**
     * Add new comment (change step)
     */
    doAdd()
    {
        this.props.updateSpecialPage('add');
    },

    /**
     * Display list of notes
     */
    render()
    {
        return (
            <div className="main row" id="readStep">
                <h3 className="col-xs-12">{ this.props.currentNote.title }</h3>
                <div className="col-xs-6">
                    <div className="btn btn-default btn-back" onClick={ this.doReturn }>
                        Back<span className="hidden-xxs"> to overview</span>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="btn btn-success pull-right" onClick={ this.doAdd }>
                        Add<span className="hidden-xxs"> additional note</span>
                    </div>
                </div>
                <CommentsList comments={ this.props.currentNote.comments } />
            </div>
        );
    }
});

module.exports = ReadNoteStep;