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
  }

exports.NoteListView = NoteListView;

})(this);
