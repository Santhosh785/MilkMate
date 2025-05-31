<?php
include 'load.php';

$user = "bavasri";
$pass = "password";

$result = User::validate_credentials($user, $pass);
if ($result) {
    echo ("Login Sucesss");
} else {
    echo ("Login Fail");
}
