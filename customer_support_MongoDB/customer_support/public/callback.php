<?php

require_once __DIR__ . '/../config/google.php';
require_once __DIR__ . '/../config/database.php';

if (isset($_GET['code'])) {

    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token);

    $oauth = new Google_Service_Oauth2($client);
    $userInfo = $oauth->userinfo->get();

    $collection = $db->users;

    $collection->insertOne([
        'name' => $userInfo->name,
        'email' => $userInfo->email,
        'created_at' => new MongoDB\BSON\UTCDateTime()
    ]);

    echo "<h2>Login Successful</h2>";
    echo "Name: " . $userInfo->name . "<br>";
    echo "Email: " . $userInfo->email . "<br>";
    echo "<h3>User saved successfully!</h3>";

} else {
    echo "Authentication Failed!";
}
