<?php
include 'load.php';

$user = "santhosh";
$pass = isset($_GET['pass']) ? $_GET['pass'] : '';
$result = null;

if (isset($_GET['logout'])) {
    Session::Destroy();
    die("Session destroyed,<a href='logintest.php'>LoginAgain</a>");
}

if (Session::get('is_loggedin')) {
    $userdata = Session::get('session_user');
    print("Welcome Back,$userdata[username]");
    $result = $userdata;
} else {
    printf("No Session found, Trying to login now .<br>");
    $result = User::validate_credentials($user, $pass);
    if ($result) {
        session_regenerate_id(true);
        echo "Login Success,$result[username]";
        Session::set('is_loggedin', true);
        Session::set('session_user', $result);
    } else {
        echo "Login Failed, $user <br>";
    }
}
echo <<<EOL
<br><br><a href="logintest.php?logout">Logout</a>
EOL;

// $result = User::validate_credentials($user, $pass);
// if ($result) {
//     echo ("Login Sucesss");
// } else {
//     echo ("Login Fail");
// }
