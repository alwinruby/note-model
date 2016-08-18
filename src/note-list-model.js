(function(exports){

  function NoteList(){
    this.notes = [];
  }
  NoteList.prototype.displayList = function(){
    return this.notes;
  };

  NoteList.prototype.addNote = function(text){
    var note = new Note(text);
    note.id = this.notes.length;
    this.notes.push(note);
  };

  exports.NoteList = NoteList;

})(this);
