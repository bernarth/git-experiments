// need to npm install pg
import { Client } from 'pg';
let connectionString = 'postgres://userName:password@serverName/ip:port/nameOfDatabase';
let pgClient = new Client(connectionString);
pgClient.connect();