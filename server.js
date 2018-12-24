const express = require('express');
const cors = require('cors');

const searchController = require('./searchController');
const app = express();
app.use(cors());

app.route('/search').get(searchController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
