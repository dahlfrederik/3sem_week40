import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import SERVER_URL from "./constants.js"
import personFacade from "./personFacade"



// GET PERSONS 
function loadPersons() {
  personFacade.getPersons()
    .then(data => {
      const persons = data.all;
      const personRows = persons.map(person =>
        `<tr>
     <td>${person.id}</td>
     <td>${person.fName}</td>
     <td>${person.lName}</td>
     <td>${person.phone}</td>
     <td>${person.street}</td>
     <td>${person.zip}</td>
     <td>${person.city}</td>
     <td><a href="#" class="btnDelete" id="${person.id}">delete</a></td>
     <td><a href="#" class="btnEdit" id="${person.id}" data-whatever="id="${person.id}" data-toggle="modal" data-target="#myModal2">edit</a></td>
    </tr>`
      )
      const personRowsAsString = personRows.join("");
      document.getElementById("tbody").innerHTML = personRowsAsString;

    })
}
loadPersons()
document.getElementById("reload").addEventListener("click", loadPersons)


// ADD PERSON 
function addNewPerson() {
  let newPerson = {
    "fName": document.getElementById("personFname").value,
    "lName": document.getElementById("personLname").value,
    "phone": document.getElementById("personPhone").value,
    "street": document.getElementById("personStreet").value,
    "zip": document.getElementById("personZip").value,
    "city": document.getElementById("personCity").value
  }
  personFacade.addPerson(newPerson)

}
document.getElementById("savebtn").addEventListener("click", addNewPerson)

//DELETE & EDIT PERSON BUTTONS
document.getElementById("tbody").addEventListener('click',function(e){
  if(e.target && e.target.className== 'btnDelete'){
    personFacade.deletePerson(e.target.id)
   } 
   if(e.target && e.target.className== 'btnEdit'){
    let personToEdit = e.target.id
    document.getElementById("editBtn").addEventListener("click", function(e){               
      let newPerson = personFacade.getPerson(personToEdit)
      newPerson = {
        id: personToEdit,
        fName: document.getElementById("editPersonFname").value,
        lName: document.getElementById("editPersonLname").value,
        phone: document.getElementById("editPersonPhone").value,
        street: document.getElementById("editPersonStreet").value,
        zip: document.getElementById("editPersonZip").value,
        city: document.getElementById("editPersonCity").value,
        }
        personFacade.editPerson(newPerson)    
      
    });
  }
}); 








