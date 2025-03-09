const Contact = require('../Model/Contact');

class AddressBook {
    constructor(name) {
        this.name = name; // Name for the address book
        this.contacts = []; // Contacts will be stored in an array
    }

    // Validation method
    validateContact(contact) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const addressRegex = /^.{4,}$/;
        const zipRegex = /^\d{5}(-\d{4})?$/;
        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;

        // Validate First Name and Last Name
        if (!nameRegex.test(contact.firstName)) {
            throw new Error('First Name must start with a capital letter and be at least 3 characters long');
        }
        if (!nameRegex.test(contact.lastName)) {
            throw new Error('Last Name must start with a capital letter and be at least 3 characters long');
        }

        // Validate Address, City, State
        if (!addressRegex.test(contact.address)) {
            throw new Error('Address must be at least 4 characters long');
        }
        if (!addressRegex.test(contact.city)) {
            throw new Error('City must be at least 4 characters long');
        }
        if (!addressRegex.test(contact.state)) {
            throw new Error('State must be at least 4 characters long');
        }

        // Validate Zip Code
        if (!zipRegex.test(contact.zip)) {
            throw new Error('Zip Code must be valid (5 digits or 5+4 digits with hyphen)');
        }

        // Validate Phone Number
        if (!phoneRegex.test(contact.phone)) {
            throw new Error('Phone number must be valid (e.g., (123) 456-7890 or 123-456-7890)');
        }

        // Validate Email
        if (!emailRegex.test(contact.email)) {
            throw new Error('Email must be in a valid format (e.g., example@domain.com)');
        }

        return true;
    }

    // Add contact after validation and duplicate check
    addContact(contact) {
        // Check if the contact already exists in the address book using first and last name
        const duplicate = this.contacts.some(existingContact => 
            existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
        );

        if (duplicate) {
            return "Duplicate contact! A contact with this name already exists in the address book.";
        }

        try {
            this.validateContact(contact); // Validate the contact before adding
            this.contacts.push(contact); // Add the new contact to the array
            return "Contact added successfully!";
        } catch (error) {
            return error.message; // Return the validation error message
        }
    }

    // Get all contacts in this address book
    getAllContacts() {
        return this.contacts;
    }

    // Find contact by first name and last name
    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    // Edit contact details
    editContact(firstName, lastName, updatedContact) {
        const contact = this.findContact(firstName, lastName);
        if (!contact) {
            return "Contact not found!";
        }

        // Update contact details
        contact.firstName = updatedContact.firstName || contact.firstName;
        contact.lastName = updatedContact.lastName || contact.lastName;
        contact.address = updatedContact.address || contact.address;
        contact.city = updatedContact.city || contact.city;
        contact.state = updatedContact.state || contact.state;
        contact.zip = updatedContact.zip || contact.zip;
        contact.phone = updatedContact.phone || contact.phone;
        contact.email = updatedContact.email || contact.email;

        return "Contact updated successfully!";
    }

    // Delete contact by first name and last name
    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (index === -1) {
            return "Contact not found!";
        }

        // Remove the contact from the array
        this.contacts.splice(index, 1);
        return "Contact deleted successfully!";
    }

    // Get the number of contacts in this address book
    getNumberOfContacts() {
        return this.contacts.length;
    }

    // Find all contacts in a particular city
    getContactsByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    // Find all contacts in a particular state
    getContactsByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    // Group contacts by city using reduce
    groupContactsByCity() {
        return this.contacts.reduce((groupedContacts, contact) => {
            const city = contact.city;
            if (!groupedContacts[city]) {
                groupedContacts[city] = [];
            }
            groupedContacts[city].push(contact);
            return groupedContacts;
        }, {});
    }

    // Group contacts by state using reduce
    groupContactsByState() {
        return this.contacts.reduce((groupedContacts, contact) => {
            const state = contact.state;
            if (!groupedContacts[state]) {
                groupedContacts[state] = [];
            }
            groupedContacts[state].push(contact);
            return groupedContacts;
        }, {});
    }
}

module.exports = AddressBook;