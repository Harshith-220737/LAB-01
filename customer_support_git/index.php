<?php
require 'config.php';

$authorizationUrl = $provider->getAuthorizationUrl();
$_SESSION['oauth2state'] = $provider->getState();
?>

<h2>Customer Support</h2>
<a href="<?= htmlspecialchars($authorizationUrl) ?>">
    <button>Login with GitHub</button>
</a>

