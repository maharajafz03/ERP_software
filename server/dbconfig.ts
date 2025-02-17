import { Pool } from "pg"

const client = new Pool({
    user: 'maga_dev',
    host: 'localhost',
    database: 'nodesql',
    password: '12345',
    port: 5432
});

client.connect()
    .then(() => {
        console.log('db is connected')
    })  

export default client;