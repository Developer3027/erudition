import express from 'express';
import fs from 'fs';
import { readdirSync } from 'fs';
import cors from 'cors';
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

readdirSync('./routes').map((rout) =>
  app.use('/api', require(`./routes/${rout}`))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is listening in ${process.env.MODE} on port ${PORT}`)
);
