<?php
require 'config.php';

if (!isset($_GET['code'])) {
    exit('Authentication failed');
}

if (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {
    unset($_SESSION['oauth2state']);
    exit('Invalid state');
}

$accessToken = $provider->getAccessToken('authorization_code', [
    'code' => $_GET['code']
]);

$user = $provider->getResourceOwner($accessToken);

$avatar = $user->toArray()['avatar_url'];

echo "<h2>Login Successful</h2>";
echo "<img src='$avatar' width='120' style='border-radius:50%;'><br><br>";
echo "Name: " . $user->getName() . "<br>";
echo "Email: " . $user->getEmail() . "<br>";

