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
const contact1 = new Contact("Aman", "Singh", "Basant kunj, Bhopal", "Bhopal", "India", "46202", "994 455-2873", "Amansingh@gmail.com");
const contact2 = new Contact("Rishu", "Singh", "Basant kunj, Bhopal", "Bhopal", "India", "46202", "878-592-7893", "Amansingh@gmail.com");
const contact3 = new Contact("Sonu", "Singh", "Basant kunj, Bhopal", "Gopalganj", "India", "42022", "987-322-3221", "Amansingh@gmail.com");

// Add Contacts to specific Address Books
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact2)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact3)); 

// Find Contacts in Bhopal
const bhopalContacts = manager.addressBooks[0].findContactsByCity("Bhopal");
console.log("Contacts in Bhopal:", bhopalContacts);

// Find Contacts in gopalganj
const usaContacts = manager.addressBooks[0].findContactsByState("Gopalganj");
console.log("Contacts in gopalganj:", usaContacts);