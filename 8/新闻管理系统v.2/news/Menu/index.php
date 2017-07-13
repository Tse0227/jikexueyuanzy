<?php
header("Content-type:application/json; charset=utf-8");
include_once('connect.php');
$action = $_POST['action'];
switch($action){
    case 'add':  //新增项
	   $titlea = $_POST['newstitle'];
 		mysql_query("set names utf8");
 	    $resultaaa="INSERT INTO `news`( `newtitle`) VALUES ('".$titlea."')";
	   $resultaaa=mysql_query($resultaaa,$con);
	   if($resultaaa){
		   echo '1';
	   }else{
		   echo '2';
	   }
	   break;
	case 'del':  //删除项
	   $newids = $_POST['newsid'];
 		mysql_query("set names utf8");
 	    $resultaaa="DELETE FROM `news` WHERE `newid`=".$newids;
	   $resultaaa=mysql_query($resultaaa,$con);
	   if($resultaaa){
		   echo '1';
	   }else{
		   echo '2';
	   }
	   break;
	case 'edit':  //编辑项
	   $id = $_POST['newsid'];
	   $title = $_POST['newstitle'];
 		mysql_query("set names utf8");

 	    $sqlSSS="update news set newtitle='".$title."' where newid='".$id."'";
	   $resultSSS=mysql_query($sqlSSS,$con);
	   if($resultSSS){
		   echo '1';
	   }else{
		   echo '2';
	   }
	   break;
	case 'select':
 	    $sql="select * from news";
 		mysql_query("set names utf8");
 		$result=mysql_query($sql,$con);
 		$arr=array();
   		while($row=mysql_fetch_array($result))
   		{
   		 array_push($arr,array("newsid"=>$row['newid'],"newtitle"=>$row['newtitle']));
   		}
   		$result=array("errcode"=>0,"result"=>$arr);
  		 echo json_encode($result, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	    break;
	case 'selecbyid':
	     	    $sql="SELECT * FROM `news` WHERE newid=".$_POST['newssid'];
 		mysql_query("set names utf8");
 		$result=mysql_query($sql,$con);
 		$arr=array();
   		while($row=mysql_fetch_array($result))
   		{
   		 array_push($arr,array("newsid"=>$row['newid'],"newtitle"=>$row['newtitle']));
   		}
   		$result=array("errcode"=>0,"result"=>$arr);
  		 echo json_encode($result, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    break;
    default :echo "string";
}
  mysql_close($con);
  ?>