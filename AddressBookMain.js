const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

class AddressBookManager {
    constructor() {
        this.addressBooks = []; // Array to store multiple address books
    }

    // Create a new Address Book
    createNewAddressBook(name) {
        const newAddressBook = new AddressBook(name);
        this.addressBooks.push(newAddressBook);
        return `New Address Book '${name}' created successfully!`;
    }

    // Add contact to a specific Address Book by its name
    addContactToAddressBook(bookName, contact) {
        const addressBook = this.addressBooks.find(book => book.name === bookName);
        if (!addressBook) {
            return `Address Book '${bookName}' not found.`;
        }
        return addressBook.addContact(contact); // Add contact to the found address book
    }

    // Find and edit contact in a specific Address Book
    findAndEditContact(bookName, firstName, lastName, updatedContact) {
        const addressBook = this.addressBooks.find(book => book.name === bookName);
        if (!addressBook) {
            return `Address Book '${bookName}' not found.`;
        }

        // Find the contact and edit it
        return addressBook.editContact(firstName, lastName, updatedContact);
    }

    // Get all Address Books
    getAllAddressBooks() {
        return this.addressBooks.map(book => book.name);
    }
}

// Initialize AddressBookManager
const manager = new AddressBookManager();

// Create a new Address Book
console.log(manager.createNewAddressBook("Personal Address Book"));
console.log(manager.createNewAddressBook("Work Address Book"));

// Create Contacts
const contact1 = new Contact("Aman", "Singh", "Basant kunj, Bhopal", "Bhopal", "India", "462022", "9876543210", "Amansingh@gmail.com");
const contact2 = new Contact("John", "Doe", "123 Elm Street", "New York", "USA", "10001", "555-555-5555", "johndoe@example.com");

// Add Contacts to specific Address Books
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); // Add contact1 to "Personal Address Book"
console.log(manager.addContactToAddressBook("Work Address Book", contact2)); // Add contact2 to "Work Address Book"

// Find and edit an existing contact
const updatedContact = new Contact("Aman", "Singh", "Updated address, Bhopal", "Bhopal", "India", "462022", "9876543210", "newemail@example.com");
console.log(manager.findAndEditContact("Personal Address Book", "Aman", "Singh", updatedContact)); // Update contact1

// Get all contacts in the "Personal Address Book"
const personalAddressBook = manager.addressBooks.find(book => book.name === "Personal Address Book");
console.log(personalAddressBook.getAllContacts()); // Should show updated contact details

// List all Address Books
console.log(manager.getAllAddressBooks()); // Should list all created Address Books
