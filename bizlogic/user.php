<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

include("./connection.php");

$useremail = (isset($_GET['email']) ? $_GET['email'] : '');

$query = "select * from user where email='$useremail'";
$result = mysqli_query($con, $query);
$array = mysqli_fetch_assoc($result);

$id = $array['id'];
$name = $array['name'];
$email = $array['email'];
$username = $array['username'];


echo json_encode(
    array(
        'id' => $id,
        'name' => $name,
        'username' => $username,
        'email' => $email
    )
);
