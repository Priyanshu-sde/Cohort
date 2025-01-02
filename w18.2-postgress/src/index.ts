
import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());

const pgclient = new Client("postgresql://neondb_owner:IZLJHR8A1rqg@ep-withered-sky-a1ayip1k.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");


(async () => {
    try{
        await pgclient.connect();
        console.log("Data Base connected")
    } catch(e){
        console.log(e);
    }
})();

app.post("/signup", async (req,res) => {
    const {username, password, email, city, country, street, pincode} = req.body;
    try {
        

        await pgclient.query(
            `CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );`
            
        );

        await pgclient.query(
            `CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL ,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );`
        );

        const insertQuerry = "INSERT INTO users (username, email, password) values ($1,$2,$3) RETURNING id"

        const addressQuerry =  "INSERT INTO addresses (city, country, street,pincode,user_id) values ($1,$2,$3,$4,$5)"

        await pgclient.query("BEGIN;");
        const response = await pgclient.query(insertQuerry, [username,email, password]);
        console.log(response);
        const userId = response.rows[0].id;
        await pgclient.query(addressQuerry, [city, country, street, pincode,userId]);
        await pgclient.query("COMMIT;");

        res.json({
            message: "You have signed up successfully"
        });
    } catch (error) {
        console.log(error);

        await pgclient.query("ROLLBACK;");
        res.status(400).json({
            message: "Error while signing up",
        });
        }
} );

app.get("/metadata" , async (req,res) => {
    const id = req.query.id;

    const query1 = `SELECT username,email,id FROM users WHERE id=$1`;
    const response = await pgclient.query(query1,[id]);

    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = await pgclient.query(query2,[id]);

    res.json({
        user: response.rows[0],
        address : response2.rows
    })
})


app.get("/better-metadata", async (req,res) => {
    const id = req.query.id;
    const querry =  `SELECT users.id, users.username, users.email, addresses.city,addresses.country, addresses.street, addresses.pincode
    FROM users JOIN addresses ON users.id = addresses.user_id
    WHERE users.id=$1;`

    const response = await pgclient.query(querry,[id]);
    res.json({
        response : response.rows
    })
})



app.listen(3000);