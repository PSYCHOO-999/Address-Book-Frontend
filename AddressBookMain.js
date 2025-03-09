const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

const addressBook = new AddressBook();

// Example contact with valid details
const contact1 = new Contact(
    "Aman", "Singh", "Basant kunj, Bhopal", "Bhopal", "India", "462022", "9876543210", "Amansingh@gmail.com"
);

// Example of adding a contact and checking the result
console.log(addressBook.addContact(contact1)); 

// Example of invalid contact
const contact2 = new Contact(
    "anmol", "singh", "Basant kunj, Bhopal", "Bhopal", "India", "462022", "9876543210", "invalidemail"
);
console.log(addressBook.addContact(contact2)); 

console.log(addressBook.getAllContacts());