const { addNewContact, getContacts } = require("../controllers/crmController");

const routes = app => {
    app.route("/contact")
        .get((req, res, next) => {
            console.log("Request from", req.originalUrl);
            console.log("Request type", req.method);
            next();
        }, getContacts)
        .post(addNewContact);

    app.route("/contact/:contactId")
        .put((req, res) => res.send("PUT contact"))
        .delete((req, res) => res.send("DELETE contact"));
};

module.exports = routes;
