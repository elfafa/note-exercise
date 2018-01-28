global.window = {};
import localStorage from 'mock-local-storage';
window.localStorage = global.localStorage;

/**
 * @module variables
 */
(function(global) {

    var user  = 'Fabien';
    var notes = [
        {"id":1,"createdBy":"Sarah","title":"fake note 1","date":"2018-01-20 11:11:11","comments":[{"id":1,"createdBy":"Sarah","date":"2018-01-20 11:11:11","content":"comment of fake note 1"}]},
        {"id":2,"createdBy":"Ben","title":"fake note 2","date":"2018-01-27 12:12:12","comments":[{"id":1,"createdBy":"Ben","date":"2018-01-27 12:12:12","content":"comment of fake note 2"}]}
    ];
    var note = {
        "id":1,"createdBy":"Sarah","title":"fake note 1","date":"2018-01-20 11:11:11","comments":[{"id":1,"createdBy":"Sarah","date":"2018-01-20 11:11:11","content":"comment of fake note 1"}]
    };
    var comments = [
        {"id":1,"createdBy":"Sarah","date":"2018-01-20 11:11:11","content":"comment 1 of fake note"},
        {"id":2,"createdBy":"Ben","date":"2018-01-20 12:12:12","content":"comment 2 of fake note"},
        {"id":3,"createdBy":"Fabien","date":"2018-01-20 13:13:13","content":"comment 3 of fake note"}
    ];
    var comment = [
        "id":1,"createdBy":"Sarah","date":"2018-01-20 11:11:11","content":"comment of fake note"
    ];

    /**
     * @returns {{eventMasterDatas: (object), eventDatas: (object)}}
     */
    function testLib() {
        return {
            'user'    : user,
            'notes'   : notes,
            'note'    : note,
            'comments': comments,
            'comment' : comment,
        };
    }

    var defineAsGlobal = true;
    if(typeof exports === 'object') {
        module.exports = testLib;
        defineAsGlobal = false;
    }

    if(typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('testLib', function(provide) {
            provide(testLib);
        });
        defineAsGlobal = false;
    }

    if(typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = testLib;
        });
        defineAsGlobal = false;
    }

    defineAsGlobal && (global.testLib = testLib);
})(this);

