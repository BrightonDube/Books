import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true}));
// Pre-defined format (development)
app.use(morgan('dev'));

// Pre-defined format (combined)
app.use(morgan('combined'));

// Custom Format
app.use(morgan(':method :url :status :response-time ms'));

// Custom Format with Date
app.use(morgan(':method :url :status :response-time ms :date[clf]'));

// create own logging middleware

app.use((req, res, next) => {
    console.log(`Request method: ${req.method} \nRequest url: ${req.url} \nRequest status: ${res.status} \nDate: ${Date.now()}`);
    next();
});

app.get("/", (req, res) => {  
    res.sendFile(__dirname + "/3.4+Middleware/public/index.html");
  });
app.get('/contact', (req, res) => {
    res.send("<h1>Contact me</h1><p>You can call me on +270730639639</p>");
});
app.get('/about', (req, res) => {
    res.send("<h1>About</h1> <p>I'm Brighton Dube. A restaurant manager looking to make a career change into software development.</p>");
});

app.post('/submit',(req, res)=>{
    console.log(req.body);
    res.status(200).send();
});
app.put('/user/brighton', (req, res) => {
    res.sendStatus(200);
});
app.patch('/user/brighton', (req, res) => {
    res.sendStatus(200);
});
app.delete('/user/brighton', (req, res) => {
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})