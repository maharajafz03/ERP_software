import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { client } from './dbconfig';

// Initialize Express
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// PostgreSQL connection pool setup

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
