<?php
require "conn.php";

if(isset($_GET['goodsid'])){
    $sid=$_GET['goodsid'];
    $result=$conn->query("select * from mainpiclist where picid='$sid'");
    echo json_encode($result->fetch_assoc());
}else{
    echo '接收数据失败';
}