import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Once@2024",
    database: "Genesis"
})


app.get('/test', (req, res) => {
    const sql = "Select * from Event_Report";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/user_registration', (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO user_registration (`name`, `password`, `user_role`, `mobile_number`, `email`, `date_of_birth`, `address`, `city`, `state`) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.name,
        req.body.password,
        req.body.user_role,
        req.body.mobile_number,
        req.body.email,
        req.body.date_of_birth,
        req.body.address,
        req.body.city,
        req.body.state
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(8080, ()=> {
    console.log("Listening...");
})