const person = {
    name:'aya',
    age: 20
}
const personJson = JSON.stringify(person)
console.log(personJson)

const fs = require('fs')
fs.writeFileSync('person.json',personJson)
const data = fs.readFileSync('person.json').toString()
console.log(data)
const newObject = JSON.parse(data)
console.log(newObject)
newObject.name = 'ali',
newObject.age = 40
const newJson = JSON.stringify(newObject)
fs.writeFileSync('person.json',newJson)


