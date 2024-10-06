<?php
header('Access-Control-Allow-Origin : http://localhost:3000');


$datafor=$_POST['datafor'];
$toDay = date('dmY');
$db = "book_db.sql";
exec("mysqldump --user='root' --password='' --host='localhost' $db >C:/Program Files/Wamp/www/backend/backups/".$toDay."_DBbak.sql");
$data=array("es"=>"success","res"=>"Database Backedup SuccessFully");
echo json_encode($data);
?>