function testNoteListDisplay(){
  var noteList = new NoteList();
  noteList.addNote("one");
  noteList.addNote("two");
  noteList.addNote("three");
  var list = noteList.displayList();
  if(list[0].text === "one"){
    console.log("1");
  }
  if(list[1].text === "two"){
    console.log("2");
  }
  if(list[2].text === "three"){
    console.log("3");
  }
};
testNoteListDisplay();

function checkNoteInList() {
  var note1 = "note1";
  var noteList = new NoteList();
  noteList.addNote(note1);
  if(noteList.notes[0].text === "note1") {
    console.log("This is note 1 displayed!");
  }
  else{
    console.log("Note1 is missing!");
  }
}
checkNoteInList();

function checkNotesInList() {
  var note2 = "note2";
  var noteList = new NoteList();
  noteList.addNote(note2);
  noteList.addNote(note2);
  noteList.addNote(note2);
  if(noteList.notes.length === 3) {
    console.log("All the added notes are in the list.");
  }
  else{
    console.log("Notes are added properly in the list.");
  }
}
checkNotesInList();
