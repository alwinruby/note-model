(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.outputWeb = function() {
    var string ="";
    var list1 = this.list;
    if(list1.length !==0) {
      list1.forEach(function(note){
        string +="<li><div>"+note.NoteCanStoreText()+"</div></li>";
      });
        string = "<ul>" + string + "</ul>";
    }
      return string;
  };

  NoteListView.prototype.outputTwenty = function() {
    var stringLimit20 = "";
    var list1 = this.list;
    if (list1.length !==0) {

      list1.forEach(function(note) {
        var stringNote;
        stringNote = note.NoteCanStoreText();
        stringNote = stringNote.substring(0,19);
        console.log("stringNote = " + stringNote);
        stringLimit20 +="<li><div>" + stringNote + "</div></li>";
      });
        stringLimit20 = "<ul>" + stringLimit20 + "</ul>";
    }
      return stringLimit20;
  };

exports.NoteListView = NoteListView;

})(this);
