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
                notes = [{"id":1,"createdBy":"Sarah","title":"fake note 1","date":"2018-01-20 11:11:11","comments":["createdBy","date","content"]},{"id":2,"createdBy":"Ben","title":"fake note 2","date":"2018-01-20 12:12:12","comments":["createdBy","date","content"]}];
            } else {
                notes = JSON.parse(notes);
            }
        }
        var maxId = this.state.maxId;
        $.each(notes, function(index, note) {
            maxId = Math.max(note.id, maxId);
        });
        this.setState({ 'notesList': notes, 'maxId': maxId });

        return notes;
    },

    getNote(noteId)
    {
        var notesList = this.getNotes();
        var founded   = false;
        $.each(notesList, function (note) {
            if (note.id === noteId) {
                founded = note;
                return false;
            }
        });

        return founded;
    },

    addNote(title, content)
    {
        var notes = this.getNotes();
        notes.push({
            'id'       : this.state.maxId + 1,
            'title'    : title,
            'createdBy': localStorage.getItem('currentUser'),
            'date'     : Date.now(),
            'comments' : [
                {
                    'createdBy': localStorage.getItem('currentUser'),
                    'comment'  : content,
                    'date'     : Date.now(),
                }
            ]
        })
        this.setState({ 'notesList': notes, 'maxId': this.state.maxId + 1 });
        this.saveNotes(notes);
    },

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