<?php

function load_template($name)
{
    include $_SERVER['DOCUMENT_ROOT'] . "/React_PHP/MilkMate/Backend/_templates/$name.php"; //not consistant.
}

function validate_credentials($username, $password)
{
    if ($username == "santhosh@gmail.com" and $password == "password") {
        return true;
    } else {
        return false;
    }
}
