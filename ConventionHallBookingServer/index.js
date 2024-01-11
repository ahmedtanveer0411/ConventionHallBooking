// Import the Express module
const express = require('express');


const halls = [{
    id: 1,
    name: 'Ramzan Hall'
}, {
    id: 2,
    name: 'RMZ Hall'
}]

// Create an instance of the Express application
const app = express();

// Define a route for the root path '/'
app.get('/', (req, res) => {
    res.send('Hello, Convention Hall Booking Application!!! Learning Git....');
});

app.get('/halls', (req, res) => {
    res.send(halls);
});

app.get('/halls/:id', (req, res) => {
    console.log(req.params.id)
    res.send(halls.filter(item => item.id == req.params.id));
});


// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});