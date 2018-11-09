const express = require('express');
const fs = require('fs'); // native node file system to enable reading and writing
// const users = require('./data.js').users;
const users = require('./data.json');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(users));

// format a query
app.get('/banks', (req, res) => {
    const arrayOfNames = []; 
    users.forEach((user) => {
        if (user.age >= 26) {
            arrayOfNames.push(user.name);
        }
    })
    res.send(arrayOfNames);

});

app.get('/names', (req, res) => {
    const arrayOfNames = []; 
    users.forEach((user) => {
        arrayOfNames.push(user.name);
    })
    res.send(arrayOfNames);
});

app.get('/ages26', (req, res) => {
    const arrayOfNames = []; 
    users.forEach((user) => {
        if (user.age >= 26) {
            arrayOfNames.push(user.name);
        }
    })
    res.send(arrayOfNames);
});

app.post('/newPerson', (req, res) => {
    const newUser = req.body; 
    
    const arrayOfUsers = []; 
    
    users.forEach((user) => {
        arrayOfUsers.push(user);
    })
    
    arrayOfUsers.push(newUser);

    fs.writeFile('data.json', JSON.stringify(arrayOfUsers), (err) => {
        if (err) throw err;
        console.log('The file has been saved!', arrayOfUsers);
        res.send(arrayOfUsers);
    });
    
});


app.listen(3001, () => console.log('=== SERVER STARTED ===='));