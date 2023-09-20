const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("Index");
});

app.get("/pagina2", (req, res) => {
    res.render("pagina2");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
