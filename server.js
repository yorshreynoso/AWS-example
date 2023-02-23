const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello world with express!!!'));


app.listen(PORT, () => {
    console.log(`server listen on  port ${PORT}`);
});