const Contact = require("./contact");

class Adressbook {
    contacts = [];

    addContact(contact) {
        if(this.contactExists(contact)) {
            throw new Error("Cannot add the same contact twice");
        }

        this.contacts.push(contact);
    }

    contactExists(newContact) {
        this.assertIsContactObject(newContact);

        const found = this.contacts.find((candidate) => candidate.getIdentifier() == newContact.getIdentifier());

        return !!found;
    }

    assertIsContactObject(contact) {
        if(!(contact instanceof Contact)) {
            throw new Error("Adressbook only accepts object of Contact class!");
        }
    }
}

module.exports = Adressbook;