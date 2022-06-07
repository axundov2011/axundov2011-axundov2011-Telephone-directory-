import {useState, useEffect} from "react"; 
import  "./styles.css"
import List from "./List";
import Form from "./Form";
function Contacts(){
const[contacts, setContacts] = useState([
    {
        fullname: "Aykhan",
        phone_number: "123123"
    }, {
        fullname: "Guldane",
        phone_number: "23625"
    }, {
        fullname: "Kenan",
        phone_number: "21232"
    },
]);
useEffect(() => {
console.log(contacts);
}, [contacts]);
    return(
        <div id="container">Contacts
        <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}
export default Contacts;