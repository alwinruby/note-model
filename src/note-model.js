(function(exports) {

var noteId = 0;

  function Note(string){
    this.text = string;
    this.id = noteId++;
  }

  Note.prototype.NoteCanStoreText = function(){
    return this.text;
  };

  Note.prototype.resetId = function() {
    noteId = 0;
  }

exports.Note = Note;

})(this);
