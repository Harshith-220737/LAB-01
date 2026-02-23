# Customer Support OAuth System

## 📚 Project Description

This is a simple PHP project that allows users to log in using Google
OAuth. After login, user name and email are stored in MongoDB.

------------------------------------------------------------------------

## Technologies Used

-   PHP
-   MongoDB
-   Google OAuth 2.0
-   Apache
-   Composer

------------------------------------------------------------------------

## 📂Project Structure

```
customer_support/
│
├── public/
│   ├── index.php
│   └── callback.php
│
├── config/
│   ├── google.php
│   └── database.php
│
├── vendor/
├── .env
├── composer.json
└── README.md
```

------------------------------------------------------------------------

## 🛠️ Setup Instructions

1.  Install Apache, PHP, MongoDB and Composer.
2.  Clone the project.
3.  Run: composer install
4.  Create a .env file with:

GOOGLE_CLIENT_ID=your_client_id GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost/customer_support/public/callback.php

5.  Add the same redirect URI in Google Cloud Console.
6.  Start Apache.
7.  Open: http://localhost/customer_support/public

------------------------------------------------------------------------

## 🗄️ MongoDB

Database Name: customer_support Collection Name: `users`
To check data:
    mongosh <br>
    use customer_support <br>
    `db.users.find().pretty()`

------------------------------------------------------------------------

## 🔐 Security Notes

-   Do not upload `.env` to GitHub
-   Use .gitignore for sensitive files
-   Enable MongoDB authentication in production

------------------------------------------------------------------------

---

## 👨‍💻 Author

 `Harshith Bandari`
 B.Tech CSE Student<br>
 RGUKT-NUZVID<br>
 Created as a beginner learning project for: PHP + Google OAuth + MongoDB
