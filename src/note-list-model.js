(function(exports){

  function NoteList(){
    this.notes = [];
  }
  NoteList.prototype.displayList = function(){
    return this.notes;
  };

  NoteList.prototype.addNote = function(text){
    var note = new Note(text);
    //note.id = this.notes.length;
    this.notes.push(note);
  };

  NoteList.prototype.getNoteFromId = function(id) {
    if (this.notes.length !== 0){
      var searchNote;

      this.notes.forEach(function(note){
          if (note.id === id){
            searchNote = note;
          }
      });
      return searchNote;
    }
  }

  exports.NoteList = NoteList;

})(this);
