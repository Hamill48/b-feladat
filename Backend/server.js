// Így futtasd a szervert: node server.js

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

const PORT = 5000;

// Az API: https://catfact.ninja/fact

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
