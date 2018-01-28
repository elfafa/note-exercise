import $ from 'jquery';
var createReactClass = require('create-react-class');

/**
 * NoteComponent to manage note datas
 */
var NoteComponent = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'notesList': [],
            'maxId'    : 0,
        };
    },

    getMaxIdFromList(list)
    {
        var maxId = 0;
        $.each(list, function(index, element) {
            maxId = Math.max(element.id, maxId);
        });
        return maxId;
    },

    /**
     * Load notes
     */
    getNotes()
    {
        var notes = this.state.notesList;
        // @todo: load notes from an API
        if (! notes.length) {
            notes = localStorage.getItem('notes');
            if (! notes) {
                // just to have initial notes
                notes = [
                    {"id":1,"createdBy":"Sarah","title":"fake note 1","date":"2018-01-20 11:11:11","comments":[{"id":1,"createdBy":"Sarah","date":"2018-01-20 11:11:11","content":"content of fake note 1"}]},
                    {"id":2,"createdBy":"Ben","title":"fake note 2","date":"2018-01-27 12:12:12","comments":[{"id":1,"createdBy":"Ben","date":"2018-01-27 12:12:12","content":"content of fake note 2"}]}
                ];
            } else {
                notes = JSON.parse(notes);
            }
        }
        this.setState({
            'notesList': notes,
            'maxId'    : Math.max(this.getMaxIdFromList(notes), this.state.maxId)
        });

        return notes;
    },

    /**
     * Add a new note
     */
    addNote(title, comment)
    {
        var notes = this.getNotes();
        notes.push({
            'id'       : this.state.maxId + 1,
            'title'    : title,
            'createdBy': localStorage.getItem('currentUser'),
            'date'     : Date.now(),
            'comments' : [
                {
                    'id'       : 1,
                    'createdBy': localStorage.getItem('currentUser'),
                    'content'  : comment,
                    'date'     : Date.now(),
                }
            ]
        });
        this.setState({ 'notesList': notes, 'maxId': this.state.maxId + 1 });
        this.saveNotes(notes);
    },

    /**
     * Add a new comment to a note
     */
    addComment(noteId, comment)
    {
        var notes = this.getNotes();
        $.each(notes, function (index, note) {
            if (note.id === noteId) {
                var maxId = this.getMaxIdFromList(note.comments);
                notes[index].comments.push({
                    'id'       : maxId,
                    'createdBy': localStorage.getItem('currentUser'),
                    'content'  : comment,
                    'date'     : Date.now(),
                });
                this.setState({ 'notesList': notes });
                this.saveNotes(notes);
                return false;
            }
        });
    },

    /**
     * Save notes
     */
    saveNotes(notes)
    {
        localStorage.setItem('notes', JSON.stringify(notes));
    },

    /**
     * No render for this
     */
    render()
    {
        return false;
    }
});

module.exports = NoteComponent;