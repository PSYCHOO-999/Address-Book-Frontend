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
        return addressBook.addContact(contact); }

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

// Create Contacts with Indian Names, Cities, and States
const contact1 = new Contact("Aman", "Sharma", "Basant kunj, Bhopal", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "amansharma@gmail.com");
const contact2 = new Contact("Priya", "Patel", "123 Elm Street, Mumbai", "Mumbai", "Maharashtra", "400001", "555-555-5555", "priyapatel@example.com");
const contact3 = new Contact("Rajesh", "Kumar", "456 Oak Avenue, New Delhi", "New Delhi", "Delhi", "110001", "123-456-7890", "rajesh.kumar@example.com");
const contact4 = new Contact("Sita", "Reddy", "789 Pine Road, Kolkata", "Kolkata", "West Bengal", "700001", "321-654-9870", "sita.reddy@example.com");
const contact5 = new Contact("Vikram", "Singh", "321 Maple Street, Jaipur", "Jaipur", "Rajasthan", "302001", "999-888-7777", "vikram.singh@example.com");

// Add Contacts to specific Address Books
console.log(manager.addContactToAddressBook("Personal Address Book", contact1)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact2)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact3)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact4)); 
console.log(manager.addContactToAddressBook("Personal Address Book", contact5)); 

// Get the number of contacts by city
const bhopalCount = manager.addressBooks[0].getCountByCity("Bhopal");
console.log(`Number of contacts in Bhopal: ${bhopalCount}`);

const mumbaiCount = manager.addressBooks[0].getCountByCity("Mumbai");
console.log(`Number of contacts in Mumbai: ${mumbaiCount}`);

// Get the number of contacts by state
const mpCount = manager.addressBooks[0].getCountByState("Madhya Pradesh");
console.log(`Number of contacts in Madhya Pradesh: ${mpCount}`);

const delhiCount = manager.addressBooks[0].getCountByState("Delhi");
console.log(`Number of contacts in Delhi: ${delhiCount}`);

// Group contacts by city and show count
const groupedByCity = manager.addressBooks[0].getGroupedByCity();
console.log("Grouped Contacts by City:", groupedByCity);

// Group contacts by state and show count
const groupedByState = manager.addressBooks[0].getGroupedByState();
console.log("Grouped Contacts by State:", groupedByState);