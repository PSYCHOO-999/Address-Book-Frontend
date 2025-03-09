const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact("Aman", "Sharma", "Basant kunj, Bhopal", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "amansharma@gmail.com");
const contact2 = new Contact("Priya", "Patel", "123 Elm Street, Mumbai", "Mumbai", "Maharashtra", "400001", "555-555-5555", "priyapatel@example.com");
const contact3 = new Contact("Rajesh", "Kumar", "456 Oak Avenue, New Delhi", "New Delhi", "Delhi", "110001", "123-456-7890", "rajesh.kumar@example.com");
const contact4 = new Contact("Sita", "Reddy", "789 Pine Road, Kolkata", "Kolkata", "West Bengal", "700001", "321-654-9870", "sita.reddy@example.com");
const contact5 = new Contact("Vikram", "Singh", "321 Maple Street, Jaipur", "Jaipur", "Rajasthan", "302001", "999-888-7777", "vikram.singh@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact4);
addressBook.addContact(contact5);

console.log("Unsorted Contacts:");
addressBook.printContacts();

console.log("\nSorted Contacts by Name:");
addressBook.printSortedContactsByName();

console.log("\nSorted Contacts by City:");
addressBook.printSortedContactsByCity();

console.log("\nSorted Contacts by State:");
addressBook.printSortedContactsByState();

console.log("\nSorted Contacts by Zip:");
addressBook.printSortedContactsByZip();