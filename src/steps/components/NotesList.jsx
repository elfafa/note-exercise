import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
var createReactClass = require('create-react-class');

/**
 * Display list of notes
 */
var NotesList = createReactClass(
{
    /**
     * Get list
     */
    getList()
    {
        return [
            { 'noteId': 1, 'createdBy': 'Fabien', 'title': 'fake note', 'date': '2018-01-20 11:11:11' },
            { 'noteId': 2, 'createdBy': 'Fabien', 'title': 'fake note', 'date': '2018-01-20 11:11:11' }
        ];
    },

    /**
     * Update parents datas on event click
     */
    selectRow(row)
    {
        this.props.updateCurrentNote(row);
    },

    /**
     * Get formatted date
     */
    dateFormatter(cell, row)
    {
        var dateFormat = require('dateformat');

        return dateFormat(row.date, "dS mmmm yyyy");
    },

    /**
     * Display list of events
     */
    render()
    {
        const options = {
            'onRowClick'       : this.selectRow,
            'hideSizePerPage'  : true,
            'ignoreSinglePage' : true,
            'noDataText'       : 'None available note',
        };
        return (
            <BootstrapTable
                className="col-xs-12"
                data={ this.getList() }
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