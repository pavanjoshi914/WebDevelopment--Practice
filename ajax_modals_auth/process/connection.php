<?php
    $machine="localhost";
    $user="root";
    $pass="";
    $dbName="ajaxauth1";

    $dbConnection=mysqli_connect($machine,$user,$pass,$dbName);
    if(mysqli_connect_error($dbConnection)){
        echo "Some error occured while connecting to database...";
        return;
    }
?>