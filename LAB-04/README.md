# LAB-04 - User Registration System

Simple user registration system with PHP and MySQL database.

## What's Here

- `register.html` - User registration form
- `register.php` - Backend PHP script for handling registration

## Features

- User registration form with validation
- MySQL database storage
- Password hashing with BCRYPT
- Form input validation
- User data persistence

## Setup

### Requirements

- PHP 7.0 or higher
- MySQL database
- Web server (Apache, Nginx, etc.)

### Database Setup

1. Create a MySQL database named `userdb`
2. Create a `users` table with columns:
   - `id` (INT, Primary Key, Auto-increment)
   - `username` (VARCHAR)
   - `email` (VARCHAR)
   - `password` (VARCHAR for hashed password)

### Configuration

Edit `register.php` to match your database credentials:

- Host: localhost
- User: root
- Password: (your password)
- Database: userdb

## How to Use

1. Open `register.html` in a web browser
2. Fill in the registration form
3. Submit to create a new user account
4. Check the database to verify user was created

Note: This is a basic learning project. For production, implement additional security measures like CSRF tokens and input sanitization.
