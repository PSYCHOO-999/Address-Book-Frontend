const Contact = require('../Model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Validation method
    validateContact(contact) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const addressRegex = /^.{4,}$/;
        const zipRegex = /^\d{5}(-\d{4})?$/;
        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

    addContact(contact) {
        // Validate the contact before adding it
        try {
            this.validateContact(contact);
            this.contacts.push(contact);
            return "Contact added successfully!";
        } catch (error) {
            return error.message; // Return the validation error message
        }
    }

    getAllContacts() {
        return this.contacts;
    }
}

module.exports = AddressBook;