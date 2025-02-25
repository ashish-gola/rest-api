const express = require("express");
const app = express();
let port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true}));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "sharp_field",
        content: "I love coding",
    },
    {
        username: "ashishgola",
        content: "I love playing",
    },
    {
        username: "ashu singh",
        content: "I love dancing",
    },
];


app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
});

app.post("/posts", (req, res) =>{
    let { username, content } = req.body;
    posts.push({ username, content});
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`listening to  port ${port}`);
});