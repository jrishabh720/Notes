const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
	command: 'add',
	describe : 'add',
	builder : {
		title : {
			demandOption:true,
			type:'string'
		},
		body : {
			demandOption:true,
			type:'string'
		}
	},
	handler : function(argv){
		notes.addNote(argv.title,argv.body);
	}
}).argv;

yargs.command({
	command : 'remove',
	describe : 'remove',
	builder :{
		title : {
			demandOption:true,
			type: "String"
		}
	},
	handler : function(argv){
		notes.remove(argv.title);
	}
}).argv;










































//const yargs = require('yargs');
//const validator = require('validator');
//const notes = require('./notes.js');
//const chalk = require('chalk');
//console.log(notes());
//console.log(validator.isEmail('jrishabh720@gmail.com'));
//console.log(chalk.green(notes()));
//console.log(chalk.red('Hi'));
//const a = chalk.red('error');
//console.log(process.argv[2]);
//console.log(yargs.argv);
//yargs.command({
//	command:'delete',
//	desc : 'This is Delete',
//	handler : function a(){
//		 console.log('Delete It!')
//		}
//}).argv;
  //
//yargs.command({
//	command:'add',
//	describe:'add',
//	builder:{
//		title:{
//			describe:'title',
//			demandOption: true,
//			type : 'string'
//		}
//	},
//	handler: function(){
//		console.log('Title '+ yargs.argv.title);
//	}
//}).argv;










































//const fs = require('fs');
//fs.writeFileSync('notes.txt','My name is Rishabh Jain');
//Challange is that append the File
//fs.appendFileSync('notes.txt','\n This text is appended to notes.txt');

//03.3

//const name = 'Rishabh',
//utils can import the dat which is send by utils.js
//const utils = require('./utils.js');
//console.log(utils);

//const add = require('./utils.js');

//console.log(add(1,2));

//Challange is that create a new file and import function from it.

//const s = require('./sub.js');
//const a = require('./rets.js');
//var ans = s(4,-2);
//console.log(ans);
//a('This is ....');
//const validator = require('validator');
//const x = require('./notes.js');
//console.log(x());

//console.log(validator.isEmail('jrishabh720@gmail.com'));
//console.log(validator.isURL('github.io'));

