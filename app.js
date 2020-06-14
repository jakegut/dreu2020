const cors = require('cors');
const express = require('express');
const app = express();

const m = require('./mongoose');
m.connect();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const routes = require('./views');

app.use('/api', routes);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

