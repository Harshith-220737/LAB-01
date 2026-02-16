<?php
require 'config.php';

if (isset($_GET['code'])) {

    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token);

    $oauth = new Google_Service_Oauth2($client);
    $userInfo = $oauth->userinfo->get();

    echo "<h2>Login Successful</h2>";
    echo "Name: " . $userInfo->name . "<br>";
    echo "Email: " . $userInfo->email . "<br>";
    echo "<br><h3>Callback Request Submitted Successfully!</h3>";

} else {
    echo "Authentication Failed!";
}

