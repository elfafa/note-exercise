import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
var createReactClass = require('create-react-class');

import './css/NotesList.css';

/**
 * Display list of notes
 */
var NotesList = createReactClass(
{
    /**
     * Go to note page on row click (update note)
     */
    goToNote(note)
    {
        this.props.updateCurrentNote(note);
    },

    /**
     * Get formatted date
     */
    dateFormatter(cell, row)
    {
        var dateFormat = require('dateformat');

        return dateFormat(row.date, "d/mm/yy 'at' H:M");
    },

    /**
     * Display list of events
     */
    render()
    {
        const options = {
            'onRowClick'       : this.goToNote,
            'hideSizePerPage'  : true,
            'ignoreSinglePage' : true,
            'noDataText'       : 'None available note',
        };
        return (
            <BootstrapTable
                className="col-xs-12"
                data={ this.props.notes }
                bordered={ false }
                options={ options }
                keyField={ 'noteId' }
                pagination={ false }
            >
                <TableHeaderColumn dataField="noteId" hidden></TableHeaderColumn>
                <TableHeaderColumn dataField="createdBy">Created by</TableHeaderColumn>
                <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
                <TableHeaderColumn dataField="date" dataFormat={ this.dateFormatter }>Date</TableHeaderColumn>
            </BootstrapTable>
        );
    }
});

module.exports = NotesList;