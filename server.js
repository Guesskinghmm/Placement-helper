//Backend Server
// Deployment ready
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- DATABASE CONNECTION ---
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aditya@123', 
    database: 'placement_db' 
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

// --- ROUTES ---

// 1. LOGIN
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    db.query(query, [username, password], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length > 0) {
            res.json({ success: true, user: results[0] });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});

// 2. SIGN UP
app.post('/api/signup', (req, res) => {
    const { username, password, leetcode_handle } = req.body;
    const checkQuery = 'SELECT * FROM users WHERE username = ?';
    
    db.query(checkQuery, [username], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length > 0) return res.status(400).json({ success: false, message: 'Username taken' });

        const insertQuery = 'INSERT INTO users (username, password, leetcode_handle) VALUES (?, ?, ?)';
        db.query(insertQuery, [username, password, leetcode_handle], (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ success: true, message: 'User registered!' });
        });
    });
});

// 3. GET COMPANY PROFILE (With Logo)
app.get('/api/company_profile/:name', (req, res) => {
    const name = req.params.name;
    const query = 'SELECT * FROM company_profiles WHERE name = ?';
    db.query(query, [name], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
});

// 4. GET QUESTIONS
app.get('/api/questions/:company', (req, res) => {
    const company = req.params.company;
    const userId = req.query.userId;
    const query = `
        SELECT q.*, 
        CASE WHEN up.status IS NOT NULL THEN 1 ELSE 0 END as is_completed
        FROM questions q
        LEFT JOIN user_progress up ON q.id = up.question_id AND up.user_id = ?
        WHERE q.company = ?
    `;
    db.query(query, [userId, company], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// 5. MARK PROGRESS
app.post('/api/progress', (req, res) => {
    const { userId, questionId, status } = req.body;
    if (status) {
        const q = 'INSERT IGNORE INTO user_progress (user_id, question_id) VALUES (?, ?)';
        db.query(q, [userId, questionId], (err, result) => res.json({ success: true }));
    } else {
        const q = 'DELETE FROM user_progress WHERE user_id = ? AND question_id = ?';
        db.query(q, [userId, questionId], (err, result) => res.json({ success: true }));
    }
});

// 6. LEETCODE PROXY
app.get('/api/leetcode/:username', async (req, res) => {
    try {
        const query = `query userProblemsSolved($username: String!) { matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count } } } }`;
        const response = await axios.post('https://leetcode.com/graphql', { query, variables: { username: req.params.username } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch LeetCode' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));