function testNoteController () {
  var note = new Note();
  note.resetId();
  noteController = new NoteController("Hello, World!");
  var appDiv = document.createElement('div');
  appDiv.id = "app";
  noteController.insertHTML();

  var outputStr = document.getElementById("app").innerHTML;

  if (outputStr === '<ul><li><div><a href="#0">Hello, World!</a></div></li></ul>'){
    console.log("Note displayed in the html page.");
  }
  else {
    console.log("Note is not displayed in the html page.");
  }
}
//testNoteController();

function testClickOnNoteChangesUrl(){
  var note = new Note();
  note.resetId();
  console.log("link clicked");
  var noteController = new NoteController("test one");
  var appDiv = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return appDiv;
  };
  noteController.insertHTML();
  var beforeClick = window.location.href;

  function showNoteForCurrentPage(){
    noteController.showNote(noteController.getNoteIdFromUrl(window.location));
  }
  window.addEventListener("hashchange",showNoteForCurrentPage);

  appDiv.getElementsByTagName("a")[0].click();
  window.setTimeout(function(){
    console.log(noteController.getNoteIdFromUrl(window.location));
    console.log(noteController.showNote(1));
    console.log(document.getElementById().innerHTML);
    var afterClick = window.location.href;
    if(beforeClick !== afterClick){
      console.log("Clicking the link changed the URL!");
    }
    else {
      console.log("Clicking the link did not change!");
    }

    if(document.getElementById().innerHTML === "<div>test one</div>"){
      console.log("Note displayed after click");
    }
    else {
      console.log("Note not displayed after click");
    }
  }, 2000);

}
testClickOnNoteChangesUrl()
