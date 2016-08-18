(function(exports) {

  function Note(string){
    this.text = string
  }

  Note.prototype.NoteCanStoreText = function(){
    return this.text;
  };

exports.Note = Note;

})(this);
