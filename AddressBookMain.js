const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

class AddressBookManager {
    constructor() {
        this.addressBooks = [];     }

    // Create a new Address Book
    createNewAddressBook(name) {
        const newAddressBook = new AddressBook(name);
        this.addressBooks.push(newAddressBook);
        return `New Address Book '${name}' created successfully!`;
    }

    // Add contact to a specific Address Book by its name
    addContactToAddressBook(bookName, contact) {
        // Find the address book by name
        const addressBook = this.addressBooks.find(book => book.name === bookName);
        if (!addressBook) {
            return `Address Book '${bookName}' not found.`;
        }
        return addressBook.addContact(contact); // Call addContact for the found address book
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

// Add Contacts to a specific Address Book
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); // Should add contact to "Personal Address Book"
console.log(manager.addContactToAddressBook("Work Address Book", contact2)); // Should add contact to "Work Address Book"

// Get all contacts in a specific Address Book
const personalAddressBook = manager.addressBooks.find(book => book.name === "Personal Address Book");
console.log(personalAddressBook.getAllContacts()); // Should display contacts in "Personal Address Book"

// List all Address Books
console.log(manager.getAllAddressBooks()); // Should list all created Address Books