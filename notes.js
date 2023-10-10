const fs = require(fs)
// const addNote = (title,body) =>{
//     const notes = loadNotes()
//     console.log(notes)
//     notes.push({
//         title,
//         body
//     })
//     console.log(notes)
//     saveNotes(notes)
// }
// const addNote = (title,body) =>{
//     const notes = loadNotes()
//     const duplicateTitle = notes.filter((note)=>{
// return note.title === title
//     })
//     console.log(duplicateTitle)
//     if(duplicateTitle.lenght === 0){
//         notes.push({
//             title, body
//         })
//         saveNotes(notes)
//         console.log('saved Successfully')
//     }
//     else{
//         console.log('Error Duplicate Title')
//     }
// }
// const addNote = (title,body) =>{
//     const notes = loadNotes()
//     const duplicateTitle = notes.find((el)=>{
//         return el.title === title
//     })
//     console.log(duplicateTitle)
//     if(!duplicateTitle){
//         notes.push({
//             title,
//             body
//         })
//         saveNotes(notes)
//         console.log('saved successfully')
//     }
//     else{console.log('Error Duplicate Title')}
// }




// const loadNotes = () =>{
//     try{
// const data = fs.readfileSync('notes'.json).toString()
// return JSON.parse(data)
// }
// catch(e) {
//     return[]
// }
// }
// const saveNotes = (notes) =>{
//     const saveData = JSON.stringify(notes)
//     fs.writeFileSync('notes.json',saveData)
// }

const deleteNotes = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((el)=>{
        return el.title !== title
    })
    console.log(notesToKeep)
    if(notes.length !== notesToKeep.length){
        saveNotes(notesToKeep)
        console.log('Delet Succfuly')
    }
 else{
    console.log('No title is found')
 }
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((el)=>{
        return el.title === title
    })
    console.log(note)
    if(note){
    
        console.log(note.body)
    }
 else{
    console.log('not found')
 }
}
const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach((el)=>{
        console.log(el.title)
    })
}

module.exports = {
    // addNote,
    // deleteNote,
    readNote,
    listNotes
};
