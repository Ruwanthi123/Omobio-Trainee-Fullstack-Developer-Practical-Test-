<?php

// header("Access-Control-Allow-Methods: PUT, POST, GET, DELETE");
header('Access-Control-Allow-Origin: *');

include("./connection.php");

$useremail = (isset($_GET['email']) ? $_GET['email'] : '');
$userpassword = (isset($_GET['password']) ? $_GET['password'] : '');

if (!isset($useremail) || !isset($userpassword))
{
    echo json_encode(
        array(
            'message' => 'please enter both email and password'
        )
    );
}
else
{
    $query = "select * from user where email='$useremail' AND password='$userpassword'";
    $result = mysqli_query($con, $query);
    $rows = mysqli_num_rows($result);

    if ($rows >= 1)
    {
        echo json_encode(
            array(
                'message' => 'Login Successful',
                'flag' => 1
            )
        );
    }
    else
    {
        echo json_encode(
            array(
                'message' => 'invalid email and password'

            )
        );
        echo $query;
    }
}
