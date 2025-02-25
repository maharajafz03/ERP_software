"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
// Initialize Express
const app = (0, express_1.default)();
const PORT = 4000;
// Middleware to parse JSON
app.use(express_1.default.json());
// PostgreSQL connection pool setup
const pool = new pg_1.Pool({
    user: 'magaraja', // Replace with your PostgreSQL username
    host: 'localhost', // Replace with your host
    database: 'ERP_SOFTWARE', // Replace with your database name
    password: 'Blockchaindev03', // Replace with your password
    port: 5432, // Default PostgreSQL port
});
pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));
// Test route to check database connection
app.get('/db-test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT NOW()'); // Simple query to get the current time
        res.json({
            message: 'Database connection successful!',
            serverTime: result.rows[0],
        });
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
