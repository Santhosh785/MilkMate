<?php

class Session
{
    public static function Start()
    {

        session_start();
    }

    public static function Unset()
    {
        session_unset();
    }
    public static function Destroy()
    {

        session_destroy();
    }
}
