const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('index');
});

app.listen(8375, () => console.log(`server running on port 8375`));