class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    // Add contact to the address book
    addContact(contact) {
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    // Get contacts by city
    getContactsByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    // Get contacts by state
    getContactsByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    // Group contacts by city and get count
    getCountByCity(city) {
        const contactsInCity = this.getContactsByCity(city);
        return contactsInCity.length;
    }

    // Group contacts by state and get count
    getCountByState(state) {
        const contactsInState = this.getContactsByState(state);
        return contactsInState.length;
    }

    // Group contacts by city and return counts
    getGroupedByCity() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});
    }

    // Group contacts by state and return counts
    getGroupedByState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});
    }
}

module.exports = AddressBook;