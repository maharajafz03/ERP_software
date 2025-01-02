import express, { Request, Response } from 'express';
import { Pool } from 'pg';

// Initialize Express
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// PostgreSQL connection pool setup
const pool = new Pool({
  user: 'magaraja',       // Replace with your PostgreSQL username
  host: 'localhost',           // Replace with your host
  database: 'ERP_SOFTWARE',   // Replace with your database name
  password: 'Blockchaindev03',   // Replace with your password
  port: 5432,                  // Default PostgreSQL port
});

pool.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// Test route to check database connection
app.get('/db-test', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Simple query to get the current time
    res.json({
      message: 'Database connection successful!',
      serverTime: result.rows[0],
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
