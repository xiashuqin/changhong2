<?php
require "conn.php";
if(isset($_POST['usertel'])&&isset($_POST['password'])){
    $usertel=$_POST['usertel'];
    $passwd=sha1($_POST['password']);
    $result=$conn->query("select * from usertable where telephone='$usertel' and passwd='$passwd'");
    if($result->fetch_assoc()){//存在说明用户名和密码都正确
        echo '1';
    }else{
        echo '0';
    }
}