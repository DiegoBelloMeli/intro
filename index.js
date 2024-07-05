const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
    ]
    res.send(products);
})

app.listen(3000, () => console.log('Server running on port 3000'))