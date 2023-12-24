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

 // handle the delete request 
//check to see if the person is available 
   function existPersonWithId(personId){
    return persons.has(personId)
  }

 function DeletePersonbyId (personId){
  const deleted = persons.delete(personId)
 return deleted
 }

  module.exports={
    getAllPersons,
    addnewPerson,
    existPersonWithId,
    DeletePersonbyId 
}
  

  