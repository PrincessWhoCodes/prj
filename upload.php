<?php
header('Access-Control-Allow-Origin:http://localhost:3000');




$host = "localhost";
$username = "root";
$password = "";
$database = "book_db.sql";
$conn=mysqli_connect($host, $username, $password, $database);
// $datafor=$_POST['datafor'];

// Directory where files will be uploaded
// $targetDir = ;
// $targetC = ;

error_reporting(E_ALL);
ini_set('display_errors', 1);


$file_name = $_FILES['fupload']['name'];
$file_size = $_FILES['fupload']['size'];
$file_tmp = $_FILES['fupload']['tmp_name'];
$file_type = $_FILES['fupload']['type'];
move_uploaded_file($file_tmp,"C:/Program Files/Wamp/www/backend/books/".$file_name);
echo "Book uploaded successfully";

$cover_name = $_FILES['cover']['name'];
$cover_size = $_FILES['cover']['size'];
$cover_tmp = $_FILES['cover']['tmp_name'];
$cover_type = $_FILES['cover']['type'];

move_uploaded_file($cover_tmp,"C:/Program Files/Wamp/www/backend/covers/".$cover_name);
echo "Cover uploaded successfully";
?>