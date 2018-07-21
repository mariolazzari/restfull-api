const {
    addNewContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/crmController");

const routes = app => {
    app.route("/contact")
        .get((req, res, next) => {
            console.log("Request from", req.originalUrl);
            console.log("Request type", req.method);
            next();
        }, getContacts)
        .post(addNewContact);

    app.route("/contact/:contactId")
        .get(getContact)
        .put(updateContact)
        .delete(deleteContact);
};

module.exports = routes;
