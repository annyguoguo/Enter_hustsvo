<?php
header("Content-type:text/html; charset=utf-8");
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $date=date("Y-m-d H:i:s").'deadline';
    $content=json_decode(file_get_contents("php://input"));
    $name=htmlspecialchars($content->{'name'});
    $major=htmlspecialchars($content->{'major'});
    $phone=htmlspecialchars($content->{'phone'});
    $email=htmlspecialchars($content->{'email'});
    $interest=htmlspecialchars($content->{'interest'});
    $experience=htmlspecialchars($content->{'experience'});
    $chosen_0=htmlspecialchars($content->{'chosen'}[0]);
    $chosen_1=htmlspecialchars($content->{'chosen'}[1]);
    $long=strlen($phone);
    if($long != 11){
        echo json_encode(['statusCode' => 1, 'message' => "手机号参数错误"]);
        die();
    }
}
if($con=mysqli_connect("localhost","hustsvo","abcd1234")){
    // echo "连接数据库成功!";
    if(mysqli_select_db($con,"hustsvo")){
        // echo "选择数据库成功!";  // 下方填表名
        if(mysqli_query($con,"INSERT INTO 2019Hustsvo_Enter_spr   
        VALUES(null, '$date', '$name','$major','$phone','$email','$interest','$experience','$chosen_0','$chosen_1')")){
            echo json_encode(['statusCode' => 200, 'message' => "报名成功！"]);
        }
        else{
            echo json_encode(['statusCode' => 500, 'message' => "插入记录失败：".mysqli_error($con)]);
            die();
        }
    }
    else{
        echo json_encode(['statusCode' => 500, 'message' => "选择数据库失败：".mysqli_error($con)]);
        die();
    }
}
else{
    echo json_encode(['statusCode' => 500, 'message' => "连接数据库失败：".mysqli_error($con)]);
    die();
}
mysqli_close($con);
?>