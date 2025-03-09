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

    sortContactsByCity() {
        return this.contacts.sort((a, b) => {
            const cityA = a.city.toLowerCase();
            const cityB = b.city.toLowerCase();
            return cityA.localeCompare(cityB);
        });
    }

    sortContactsByState() {
        return this.contacts.sort((a, b) => {
            const stateA = a.state.toLowerCase();
            const stateB = b.state.toLowerCase();
            return stateA.localeCompare(stateB);
        });
    }

    sortContactsByZip() {
        return this.contacts.sort((a, b) => {
            return a.zip - b.zip;
        });
    }

    printContacts() {
        this.contacts.forEach(contact => console.log(contact.toString() + '\n'));
    }

    printSortedContactsByName() {
        const sortedContacts = this.sortContactsByName();
        sortedContacts.forEach(contact => console.log(contact.toString() + '\n'));
    }

    printSortedContactsByCity() {
        const sortedContacts = this.sortContactsByCity();
        sortedContacts.forEach(contact => console.log(contact.toString() + '\n'));
    }

    printSortedContactsByState() {
        const sortedContacts = this.sortContactsByState();
        sortedContacts.forEach(contact => console.log(contact.toString() + '\n'));
    }

    printSortedContactsByZip() {
        const sortedContacts = this.sortContactsByZip();
        sortedContacts.forEach(contact => console.log(contact.toString() + '\n'));
    }
}

module.exports = AddressBook;