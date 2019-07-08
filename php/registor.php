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


// 前端点击提交注册传过来的注册信息,存入数据库
if(isset($_POST['phone'])){
    $phone=$_POST['phone'];
    $password=sha1($_POST['password']);
    $conn->query("insert usertable values('$phone','$password')");
    header('location:http://localhost/changhong2/src/login.html');//提交信息后立马跳转到登录页面
}