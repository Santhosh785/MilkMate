<?php

class UserSession
{
    private $conn;
    private $id;
    private $uid;
    private $data;

    public static function authenticate($user, $pass)
    {

        $username = User::validate_credentials($user, $pass);
        $user = new User($username);
        if ($username) {
            $conn = DataBase::getConnection();
            $ip = $_SERVER['REMOTE_ADDR'];
            $agent = $_SERVER['HTTP_USER_AGENT'];
            $token = md5(rand(0, 9999) . $ip . $agent . time());
            $sql = "INSERT INTO `session` (`uid`, `token`, `login_time`, `ip`, `user_agent`, `active`)
                VALUES ('$user->id', '$token', now(), '$ip', '$agent', '1')";
            if ($conn->query($sql)) {
                Session::set('Session_token', $token);
                return $token;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function __construct($token)
    {
        $this->conn = DataBase::getConnection();
        // $this->id = $id;
        $sql = "SELECT * FROM `session` WHERE `token`= '$token' LIMIT 1";
        $result = $this->conn->query($sql);
        if ($result && $result->num_rows) {
            $row = $result->fetch_assoc();
            $this->data = $row;
            $this->uid = $row['uid'];
        } else {
            throw new Exception("Session is Invalid .");
        }
    }

    // You can add getter for uid if needed
    public function getUserId()
    {
        return $this->uid;
    }
}
