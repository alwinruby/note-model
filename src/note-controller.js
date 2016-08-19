(function(exports) {
  var note = new Note();
  note.resetId();
  function NoteController(text){

    this.list = new NoteList();
    this.list.addNote(text);

    this.noteListView = new NoteListView(this.list.displayList());
  }

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.outputWeb();
  };

  NoteController.prototype.getNoteIdFromUrl = function(location) {
    return location.hash.split("#")[1];
  }

  NoteController.prototype.showNote = function(id) {
    debugger;
    var note = this.list.getNoteFromId(id);
    var singleView = new SingleNoteView(note);
    var element = document.getElementById("app");
    element.innerHTML = singleView.writeHTML();
  }

  exports.NoteController = NoteController;
})(this);
