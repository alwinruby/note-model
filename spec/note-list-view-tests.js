function testNoteListView(){
  var list = new NoteList();
  list.addNote("I am Alwin.");
  list.addNote("I am Noby.");
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === "<ul><li><div>I am Alwin.</div></li><li><div>I am Noby.</div></li></ul>"){
    console.log("notes were successfully converted into a html string.");
  }
  else {
    console.log("notes did not convert into a html string properly.");
  }
}
testNoteListView();

function testNoNoteListView(){
  var list = new NoteList();
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === ""){
    console.log("no note. Pass.");
  }
  else {
    console.log("Something is returned.");
  }
}
testNoNoteListView();

function testOutputTwenty() {
  var list = new NoteList();

  list.addNote("This is a string which must have more than 20");
  var noteListView = new NoteListView(list.displayList());
  var web20String = noteListView.outputTwenty();
  if (web20String === "<ul><li><div>This is a string whi</div></li></ul>") {
    console.log("Restricts to 20 characters");
  }
  else {
    console.log("NOT restricted to 20 characters");
  }
}
testOutputTwenty();

function testOutputTwentyExact() {
  var list = new NoteList();

  list.addNote("12345678901234567890");
  var noteListView = new NoteListView(list.displayList());
  var web20String = noteListView.outputTwenty();
  if (web20String === "<ul><li><div>12345678901234567890</div></li></ul>") {
    console.log("Restricts to exactly 20 characters");
  }
  else {
    console.log("NOT restricted to exactly 20 characters");
  }
}
testOutputTwentyExact();
