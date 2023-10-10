// const fs = require('fs')
// fs.writeFileSync('notes.txt','hello')
// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFileSync('notes.txt','hello')


// var validator = require('validator');
// console.log(validator .isEmail('aya@gmail.com'));
// console.log(validator .isEmail('aya'));


// console.log(process.argv)


// const command = process.argv[2]
// console.log(command)

// if(command === 'add' ){
//     console.log('add item')
// }
// else if(Command === 'Dellet'){
//     console.log('Dellet itam')
// }
// else{
//     console.log(error)
// }


const { demandOption, string } = require('yargs');
const yargs = require('yargs');

// yargs.command({
//     command: 'add',
//     describe: 'add notes',
//     builder:{
//         describe:'this is title describe in add command',
//         demandOption:true,
//         type:string
    
//     },
//     body:{
//         describe:'this is title describe in add command',
//         demandOption:true,
//         type:'string'  
//     },
//     handler:()=>{
//         // console.log('add notes')
//         notes.addNote(yargs.argv.title.yargs.argv.body)
//     }
// })
yargs.command({
    command: 'delete',
    describe: 'delete notes',
    builder:{
        x:{
        describe:'this is title describe in add command',
        demandOption:true,
        type:'string'
        }
    },
    handler: () => {
        // console.log('delete notes')
        notes.deleteNote(yargs.argv.title)
    }
})


yargs.command({
    command: 'read',
    describe: 'read notes',
    builder:{
        x:{
        describe:'this is title describe in add command',
        demandOption:true,
        type:string
    } 
    },
    handler: () => {
        // console.log('read notes')
        notes.readNote(yargs.argv.title)
    }
})
yargs.command({
    command: 'lest',
    describe: 'lest notes',
    handler: () => {
        // console.log('lest notes')
        notes.listNotes()
    }
})


console.log(yargs.argv)
// yargs.parse()



