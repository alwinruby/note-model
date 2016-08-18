function testNoteCanStoreText(){
  var note = new Note("My favourite language is JavaScript");
  if(note.NoteCanStoreText() === "My favourite language is JavaScript") {
    console.log("Note can input and output the same text. Test passes.");
  }
  else {
    console.log("Note input and output do not match. Test fails.");
  };
};
testNoteCanStoreText();
