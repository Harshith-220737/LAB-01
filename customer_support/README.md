# Customer Support - Google OAuth Login System

PHP web application with Google OAuth 2.0 authentication. Users can log in using their Google account.

## What's Here

- `index.php` - Login landing page with Google OAuth button
- `callback.php` - OAuth callback handler after user authorization
- `config.php` - Configuration and Google API setup
- `composer.json` - PHP dependencies

## Features

- Google OAuth 2.0 login
- Secure authentication flow
- Environment variable configuration
- Session management

## Setup

### Requirements

- PHP 7.4 or higher
- Composer (for dependency management)
- Google OAuth 2.0 credentials

### Installation

1. Install dependencies:

   ```
   composer install
   ```

2. Create a `.env` file in this directory:

   ```
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   GOOGLE_REDIRECT_URI=http://localhost/customer_support/callback.php
   ```

3. Set up Google OAuth:
   - Go to Google Cloud Console
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 credentials (Web application)
   - Add authorized redirect URI

## How to Use

1. Start your web server
2. Navigate to `index.php`
3. Click "Login with Google" button
4. Authorize the application
5. You'll be redirected to the callback page with user info

## Environment Variables

Create a `.env` file with:

- `GOOGLE_CLIENT_ID` - From Google Cloud Console
- `GOOGLE_CLIENT_SECRET` - From Google Cloud Console
- `GOOGLE_REDIRECT_URI` - Callback URL (usually localhost/callback.php)

The app will automatically load these variables and use them for OAuth configuration.
