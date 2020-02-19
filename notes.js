const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title,body){
	const notes = loadNote();
	const dublicate = notes.filter(function(note){
		return note.title==title;
	})
	if(dublicate.length==0){
	notes.push({
		title:title,
		body:body
	})}else{
		console.log("Already Exists");
	}
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

const remove = function(title){
	const notes = loadNote();
	const need = notes.filter(function(note){
		return note.title !== JSON.stringify(title);
	})
	if(need.length <  notes.length){console.log(chalk.green.inverse(" Removed "));}
	else{console.log(chalk.red.inverse(" Not Founded "))};
	savenote(need);
}

module.exports = {
	addNote : addNote,
	loadNote : loadNote,
	remove : remove
}