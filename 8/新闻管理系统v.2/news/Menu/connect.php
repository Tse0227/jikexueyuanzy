<?php
header("Content-type:application/json; charset=utf-8");
 $con=mysql_connect("127.0.0.1","root","root");
 if(!$con){
 	die('Could not connect:'.mysql_error());
 }else{
 	mysql_select_db("test",$con);
}
  ?>