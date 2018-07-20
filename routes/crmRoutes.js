const routes = app => {
    app.route("/contact")
        .get(
            (req, res, next) => {
                console.log("Request from", req.originalUrl);
                console.log("Request type", req.method);
                next();
            },
            (req, res, next) => res.send("GET contact")
        )
        .post((req, res) => res.send("POST contact"));

    app.route("/contact/:contactId")
        .put((req, res) => res.send("PUT contact"))
        .delete((req, res) => res.send("DELETE contact"));
};

module.exports = routes;
