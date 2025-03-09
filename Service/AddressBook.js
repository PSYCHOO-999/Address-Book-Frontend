const Contact = require('./Model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortContactsByName() {
        return this.contacts.sort((a, b) => {
            const nameA = a.getFullName().toLowerCase();
            const nameB = b.getFullName().toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    printContacts() {
        this.contacts.forEach(contact => console.log(contact.toString() + '\n'));
    }

    printSortedContacts() {
        const sortedContacts = this.sortContactsByName();
        sortedContacts.forEach(contact => console.log(contact.toString() + '\n'));
    }
}

module.exports = AddressBook;