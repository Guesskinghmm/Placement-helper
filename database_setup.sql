CREATE DATABASE IF NOT EXISTS placement_db;
USE placement_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    leetcode_handle VARCHAR(255),
    streak INT DEFAULT 0,
    last_login DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Company Profiles Table
CREATE TABLE IF NOT EXISTS company_profiles (
    name VARCHAR(50) PRIMARY KEY,
    logo_url LONGTEXT,
    description TEXT,
    hiring_nature TEXT
);

-- 3. Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(50),
    title VARCHAR(255),
    description TEXT,
    difficulty VARCHAR(20),
    link VARCHAR(255),
    solution TEXT,
    constraints TEXT,
    hint TEXT
);

-- 4. User Progress Table
CREATE TABLE IF NOT EXISTS user_progress (
    user_id INT,
    question_id INT,
    status VARCHAR(20) DEFAULT 'done',
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, question_id)
);