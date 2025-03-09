const AddressBook = require('./Service/AddressBook');
const Contact = require('./Model/Contact');

class AddressBookManager {
    constructor() {
        this.addressBooks = []; 
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
        return addressBook.addContact(contact); 
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

    // Find and delete contact from a specific Address Book
    findAndDeleteContact(bookName, firstName, lastName) {
        const addressBook = this.addressBooks.find(book => book.name === bookName);
        if (!addressBook) {
            return `Address Book '${bookName}' not found.`;
        }

        // Find the contact and delete it
        return addressBook.deleteContact(firstName, lastName);
    }

    // Get the number of contacts in a specific Address Book
    getNumberOfContactsInAddressBook(bookName) {
        const addressBook = this.addressBooks.find(book => book.name === bookName);
        if (!addressBook) {
            return `Address Book '${bookName}' not found.`;
        }

        return `There are ${addressBook.getNumberOfContacts()} contacts in the address book '${bookName}'.`;
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
const contact2 = new Contact("Sonu", "Kumar", "Gopalganj", "Bihar", "India", "832929", "187829702", "sonu@example.com");

// Add Contacts to specific Address Books
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); 
console.log(manager.addContactToAddressBook("Work Address Book", contact2)); 

// Get number of contacts in "Personal Address Book"
console.log(manager.getNumberOfContactsInAddressBook("Personal Address Book")); 

// Get number of contacts in "Work Address Book"
console.log(manager.getNumberOfContactsInAddressBook("Work Address Book"));

// Add another contact to "Personal Address Book"
const contact3 = new Contact("Rishu", "Singh", "bhopal", "bhopal ", "india", "78698", "987654344", "alice@example.com");
console.log(manager.addContactToAddressBook("Personal Address Book", contact3)); 

// Get number of contacts again in "Personal Address Book"
console.log(manager.getNumberOfContactsInAddressBook("Personal Address Book")); 