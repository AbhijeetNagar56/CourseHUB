const express = require('express');
const app = express();
const path = require('path');
const port = 5501;
const mainrouter = require('./routes/mainRoutes');
const userrouter = require('./routes/userRoutes');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use('/', mainrouter);
app.use('/user', userrouter);


app.listen(port);


