# Customer Support - GitHub OAuth Login System

PHP web application with GitHub OAuth 2.0 authentication. Users can log in using their GitHub account.

## What's Here

- `index.php` - Login landing page with GitHub OAuth button
- `callback.php` - OAuth callback handler after user authorization
- `config.php` - Configuration and GitHub OAuth setup
- `composer.json` - PHP dependencies

## Features

- GitHub OAuth 2.0 login
- Secure authentication flow
- Environment variable configuration
- Session management

## Setup

### Requirements

- PHP 7.4 or higher
- Composer (for dependency management)
- GitHub OAuth 2.0 credentials

### Installation

1. Install dependencies:

   ```
   composer install
   ```

2. Create a `.env` file in this directory:

   ```
   GITHUB_CLIENT_ID=your_client_id_here
   GITHUB_CLIENT_SECRET=your_client_secret_here
   GITHUB_REDIRECT_URI=http://localhost/customer_support_git/callback.php
   ```

3. Set up GitHub OAuth:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth App
   - Add Authorization callback URL
   - Copy Client ID and Client Secret

## How to Use

1. Start your web server
2. Navigate to `index.php`
3. Click "Login with GitHub" button
4. Authorize the application
5. You'll be redirected to the callback page with your GitHub info

## Environment Variables

Create a `.env` file with:

- `GITHUB_CLIENT_ID` - From GitHub OAuth App settings
- `GITHUB_CLIENT_SECRET` - From GitHub OAuth App settings
- `GITHUB_REDIRECT_URI` - Callback URL (usually localhost/callback.php)

The application uses the OAuth2 GitHub provider to handle authentication securely.
