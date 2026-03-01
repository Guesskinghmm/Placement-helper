# 💠 Placement Helper – IIITA DSA Hub

> **The ultimate full-stack DSA preparation platform designed for campus placements.**
> *Target Dream Companies: Amazon, Microsoft, Adobe, Cisco, Oracle, Uber, and Zepto.*

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20MySQL%20%7C%20VanillaJS-blueviolet)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📖 About
Placement Helper is a comprehensive, company-wise DSA interview preparation platform built to help students target product-based tech giants. It transitions students away from random problem-solving into structured, highly targeted practice.

Originally a static frontend site, it has been completely re-engineered into a **Full-Stack Application** featuring a modern Dark/Neon Glassmorphism UI, a Node.js backend, and a persistent MySQL database to track user progress and streaks.

---

## ✨ Key Features

- **Company-Targeted Decks:** Handpicked, high-probability questions categorized by companies (Amazon, Microsoft, Zepto, etc.).
- **Real Interview Constraints:** Practice with actual Time and Space limits to simulate real mock interviews.
- **Smart Solution Engine:** One-click access to highly optimized C++ solutions, complete with Time & Space complexity analysis.
- **Hint System:** A guided nudge to help you solve problems without completely revealing the answer.
- **Progress & Streak Tracking:** Log in to track your daily consistency and mark specific questions as "Done" via the database.
- **Premium UI:** Dark mode, neon accents, and a bento-grid layout for a distraction-free, aesthetically pleasing experience.
- **Direct Practice Links:** Instant redirects to LeetCode and Codeforces for hands-on submission.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Glassmorphism, Neon Effects), Vanilla JavaScript.
- **Backend:** Node.js, Express.js.
- **Database:** MySQL (Relational Data Management).

---

## 📂 Project Structure

```text
placement-helper/
├── frontend/
│   ├── index.html           # Landing page
│   ├── dashboard.html       # Main application interface
│   ├── main.css             # Core application styling
│   ├── landing.css          # Landing page styling
│   └── app.js               # Frontend logic & API calls
├── server.js                # Node.js Express backend server
├── database_setup.sql       # MySQL schema and initial data injection
├── package.json             # Node dependencies
└── README.md                # Project documentation

```
⚙️ How to Run Locally
Follow these steps to set up the full-stack environment on your local machine:

1. Clone the Repository
```Bash
git clone https://github.com/Guesskinghmm/placement-helper.git
cd placement-helper
```
2. Install Dependencies
```Bash
npm install
```
3. Database Setup (MySQL)
 1.Open your MySQL Command Line or Workbench.

 2.Run the provided SQL script to instantly create the database and all tables:

   Open the database_setup.sql file included in this repository.

   Copy all the contents.

   Paste and execute it in your MySQL interface.

4. Configure Backend Credentials
Open server.js and update your MySQL connection details (username and password) to match your local setup:

```JavaScript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',             // <-- Update if different
    password: 'YOUR_PASSWORD', // <-- Update this
    database: 'placement_db' 
});
```
5. Launch the Application
Start the backend server:

```Bash
node server.js
```
You should see a message confirming the server is running and connected to MySQL.

Open frontend/index.html in your web browser to view the landing page and start practicing!

---

🤝 Contribution
This project is open for contributions. You can help by:

Adding new companies and their top questions.

Enhancing C++ solutions or adding Python/Java alternatives.

Improving the UI/UX or adding new dashboard analytics.

Fork the repository, make your changes, and submit a pull request!

---

👤 Author
Aditya Tripathi Indian Institute of Information Technology, Allahabad (IIITA) GitHub: @Guesskinghmm

---

If you find this project useful for your placement prep, consider giving the repository a ⭐!

