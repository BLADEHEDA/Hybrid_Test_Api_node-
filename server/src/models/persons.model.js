const persons = new Map();

 let previouspersonid= 100;
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
 // function to enable post requests 
 const addnewPerson=(person)=>{
    previouspersonid ++ ;
    persons.set(
      previouspersonid,
      Object.assign(person,{
        personId:  previouspersonid,
      }
        )
       )
 }

  module.exports={
    getAllPersons,
    addnewPerson
}
  

  