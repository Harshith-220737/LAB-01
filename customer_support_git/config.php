<?php
require 'vendor/autoload.php';

session_start();

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use League\OAuth2\Client\Provider\Github;

$provider = new Github([
    'clientId'     => $_ENV['GITHUB_CLIENT_ID'],
    'clientSecret' => $_ENV['GITHUB_CLIENT_SECRET'],
    'redirectUri'  => $_ENV['GITHUB_REDIRECT_URI'],
]);

