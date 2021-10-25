const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const { port} = require('./config');



const PORT = port || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
   res.send('hello')
});
// routes
const userRoutes = require('./API/v1/users')
const accountsRoutes = require('./API/v1/accounts')
// Use routes
app.use('/users',userRoutes)
app.use('/accounts',accountsRoutes)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
