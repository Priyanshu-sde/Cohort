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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgclient = new pg_1.Client("postgresql://neondb_owner:IZLJHR8A1rqg@ep-withered-sky-a1ayip1k.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pgclient.connect();
        console.log("Data Base connected");
    }
    catch (e) {
        console.log(e);
    }
}))();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, city, country, street, pincode } = req.body;
    try {
        yield pgclient.query(`CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );`);
        yield pgclient.query(`CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL ,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );`);
        const insertQuerry = "INSERT INTO users (username, email, password) values ($1,$2,$3) RETURNING id";
        const addressQuerry = "INSERT INTO addresses (city, country, street,pincode,user_id) values ($1,$2,$3,$4,$5)";
        yield pgclient.query("BEGIN;");
        const response = yield pgclient.query(insertQuerry, [username, email, password]);
        console.log(response);
        const userId = response.rows[0].id;
        yield pgclient.query(addressQuerry, [city, country, street, pincode, userId]);
        yield pgclient.query("COMMIT;");
        res.json({
            message: "You have signed up successfully"
        });
    }
    catch (error) {
        console.log(error);
        yield pgclient.query("ROLLBACK;");
        res.status(400).json({
            message: "Error while signing up",
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT username,email,id FROM users WHERE id=$1`;
    const response = yield pgclient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = yield pgclient.query(query2, [id]);
    res.json({
        user: response.rows[0],
        address: response2.rows
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const querry = `SELECT users.id, users.username, users.email, addresses.city,addresses.country, addresses.street, addresses.pincode
    FROM users JOIN addresses ON users.id = addresses.user_id
    WHERE users.id=$1;`;
    const response = yield pgclient.query(querry, [id]);
    res.json({
        response: response.rows
    });
}));
app.listen(3000);
