<?php
require 'config.php';

$login_url = $client->createAuthUrl();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Customer Support</title>
</head>
<body>

<h2>Customer Support</h2>
<p>Please login with Google to request a callback.</p>

<a href="<?= htmlspecialchars($login_url) ?>">
    <button>Login with Google</button>
</a>

</body>
</html>

