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
const contact2 = new Contact("Sonu", "Singh", "Bhopal", "Bhopal", "india", "10001", "989794792", "sonu@example.com");
const contact3 = new Contact("Aman", "Singh", "Basant kunj, Bhopal", "Bhopal", "India", "462022", "9876543210", "Amansingh@gmail.com"); // Duplicate contact

// Add Contacts to specific Address Books
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact2)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact3)); 
// Get all contacts in "Personal Address Book"
const personalAddressBook = manager.addressBooks.find(book => book.name === "Personal Address Book");
console.log(personalAddressBook.getAllContacts());  