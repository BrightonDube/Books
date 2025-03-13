import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome home!</h1>");
});
app.get('/contact', (req, res) => {
    res.send("<h1>Contact me</h1><p>You can call me on +270730639639</p>");
});
app.get('/about', (req, res) => {
    res.send("<h1>About</h1> <p>I'm Brighton Dube. A restaurant manager looking to make a career change into software development.</p>");
});
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})