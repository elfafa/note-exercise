import React from 'react';
var createReactClass = require('create-react-class');

/**
 * Display list of notes
 */
var CommentsList = createReactClass(
{
    /**
     * Get formatted date
     */
    dateFormatter(date)
    {
        var dateFormat = require('dateformat');
        var dateObject = new Date(date);
        var today      = new Date();
        var yesterday  = new Date('-1 day');
        if (dateObject.setHours(0,0,0,0) === today.setHours(0,0,0,0)) {
            return dateFormat(date, "'Today at' H:M");
        } else if (dateObject.setHours(0,0,0,0) === yesterday.setHours(0,0,0,0)) {
            return dateFormat(date, "'Yesterday at' H:M");
        }

        return dateFormat(date, "d/mm/yy 'at' H:M");
    },

    /**
     * Display list of events
     */
    render()
    {
        var _self = this;

        return (
            <div className="col-xs-12 no-padding" id="listing">
            { _self.props.comments.map(function(comment) {
                return (
                    <div className="col-xs-12" key={ comment.id }>
                        <div className="hidden-xs col-sm-1">
                            <img src="/avatar.png" role="presentation" />
                        </div>
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1 comment">
                            <div className="col-xs-12">
                                { comment.createdBy }
                                <div className="pull-right">{ _self.dateFormatter(comment.date) }</div>
                            </div>
                            <div className="col-xs-12">{ comment.content }</div>
                        </div>
                    </div>
                );
            }) }
            </div>
        );
    }
});

module.exports = CommentsList;