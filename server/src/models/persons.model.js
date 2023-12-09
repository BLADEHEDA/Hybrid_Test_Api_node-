const persons = new Map();

  const person ={
    personId: 1,
    personName:'blade',
    age:22,
    occupation: 'software engineer',
    residence:'Buea'
  }
  persons.set( person.personId,person )

  const getAllPersons=()=>{
    return Array.from(persons.values())
  }

  module.exports={
    getAllPersons,
}
  

  