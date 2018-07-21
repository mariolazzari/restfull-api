const mongoose = require("mongoose");
const { ContactSchema } = require("../models/crmModel");

// create model
const Contact = mongoose.model("Contact", ContactSchema);

// add new contact
const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact
        .save()
        .then(() => res.json(newContact))
        .catch(err => res.send(err));
};

// get all contacts
const getContacts = (req, res) => {
    Contact.find({})
        .then(contacts => res.json(contacts))
        .catch(err => res.send(err));
};

// get contact by id
const getContact = (req, res) => {
    Contact.findById(req.params.contactId)
        .then(c => res.json(c))
        .catch(err => res.send(err));
};

// module exports
module.exports = {
    addNewContact,
    getContacts,
    getContact
};
