import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import multer from 'multer';
import path from 'path';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // to make images accessible from server

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_current_password",
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


app.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const sql = "UPDATE competition_registration t1 JOIN (SELECT MAX(id) AS max_id FROM competition_registration) t2 SET t1.image = ? WHERE t1.id = t2.max_id";

    db.query(sql, [image], (err, result) => {
        if(err) return res.json({Message: "Error"});
        return res.json({Status: "Success."});
    })
})

app.get('/', (req, res) => {
    const sql = 'select * from competition_registration';
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
})

app.get('/user_report', (req, res) => {
    const sql = 'select * from user_registration';
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
})

app.post('/available_competitions', (req, res) => {

    const sql = 'select * from competition_registration WHERE id IN (\
        SELECT Distinct cr.id from competition_registration cr Left JOIN user_enrollment ur ON cr.id = ur.comp_id  WHERE teacher_approval = "approved" AND cr.id NOT IN (SELECT DISTINCT comp_id FROM user_enrollment WHERE user_id = ?))';

    const value = [
        req.body.user_id
    ];

    db.query(sql, value, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
})

app.post('/personal_enrollments', (req, res) => {

    const query = "SELECT distinct * FROM user_enrollment WHERE user_id = ?";

    const values = [
        req.body.user_id
    ]

    db.query(query, values, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
  });


app.get('/enrollment_details', (req, res) => {

    const sql = "SELECT cu.comp_id, cu.comp_title, cu.date_0f_competition, cu.image, GROUP_CONCAT(u.name SEPARATOR ', ') AS user_names FROM user_enrollment cu JOIN user_registration u ON cu.user_id = u.id WHERE cu.comp_id IN (Select distinct fu.comp_id from user_enrollment fu) GROUP BY cu.comp_id, cu.comp_title, cu.date_0f_competition, cu.image";


    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })

})


app.post('/competition_registration', (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO competition_registration (`comp_title`, `comp_theme`, `status`, `date_0f_competition`, `description`) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.comp_title,
        req.body.comp_theme,
        req.body.status,
        req.body.date_of_competition,
        req.body.description
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.post('/login', (req, res) => {

    const query = "SELECT id, user_role FROM user_registration WHERE email = ? AND password = ?";

    // console.log("credentials: " + req.body);

    const values = [
        req.body.email,
        req.body.password,
        // req.body.role
    ]
    db.query(query, values, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
  });

app.post('/teacher_approval', (req, res) => {

    const query = "UPDATE competition_registration SET teacher_approval = ? WHERE id = ?";

    const values = [
        req.body.decision,
        req.body.id
    ]

    db.query(query, values, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })

});

app.post('/user_enrollments', (req, res) => {

    const query = "INSERT INTO user_enrollment (`user_id`, `comp_id`, `comp_title`, `comp_theme`, `date_0f_competition`, `description`, `image`) VALUES (?)";
    const values = [
        req.body.user_id,
        req.body.comp_id,
        req.body.comp_title,
        req.body.comp_theme,
        req.body.date_0f_competition,
        req.body.description,
        req.body.image
    ]

    db.query(query, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })

});


app.listen(8080, ()=> {
    console.log("Listening...");
})