<?php
require "conn.php";

if(isset($_POST['tel'])){
    $teldata=$_POST['tel'];
    $result=$conn->query("select * from usertable where telephone='$teldata'");
    if($result->fetch_assoc()){
        echo '1';
    }else{
        echo '0';
    }
}
