const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Aman", "Singh", "Basant kunj ,Bhopal", "Bhopal", "India", "462022", "9876543210", "Amansingh@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
