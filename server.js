const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('<h1> Buenas noches mi Vida Hermosa, buenas noches mi pequena Pia Azeneth, te ama tu papi '));


app.listen(PORT, () => {
    console.log(`server listen on  port ${PORT}`);
});