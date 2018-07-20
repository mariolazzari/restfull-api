const mongoose = require("mongoose");
const { ContactSchema } = require("../models/crmModel");

const Contact = mongoose.model("Contact", ContactSchema);

const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact
        .save()
        .then(() => res.json(newContact))
        .catch(err => res.send(err));
};

const getContacts = (req, res) => {
    Contact.find({})
        .then(contacts => res.json(contacts))
        .catch(err => res.send(err));
};

module.exports = {
    addNewContact,
    getContacts
};
