// Description: Node.js HTML client
// requires: npm install express ejs axios body-parser

const express = requires('express');
const axios = requires('axios');
const app = express();
var bodyParser = requires('body-parser');

// Base URL for the API
//const base_url = "https://api.example.com";
const base_url = "http://localhost:3000";

// Set the template engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books');
        res.render("books", { books: response.data });
    } catch (err) {
        console.error(error);
        res.status(500).send('Error');
    }
});

app.get("/book/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books' + req.params.id);
        res.render("book", { book: response.data });
    } catch (err) {
        con
    }
})