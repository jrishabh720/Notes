const fs = require('fs');

const addNote = function(title,body){
	const notes = loadNote();
	const dublicate = notes.filter(function(note){
		return note.title==title;
	})
	if(dublicate.length==0)
	notes.push({
		title:title,
		body:body
	})
	savenote(notes)
}
const savenote = function(notes){
	const n = JSON.stringify(notes);
	fs.writeFileSync('notes.json',n);
}
const loadNote = function(){
	try{
		return(JSON.parse(fs.readFileSync('notes.json').toString()));
	}catch(error){
		return [];
	}
}


module.exports = {
	addNote : addNote,
	loadNote : loadNote
}