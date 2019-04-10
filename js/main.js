
var information_z = [];
//返回填写信息
function cancel_fc(getInformation_l) {
    window.location.href = "./check_information.html?" + "my_name=" + information_z[0] + '&my_major=' + information_z[1] + '&my_phone=' + information_z[2] + '&my_email=' + information_z[3] + "&my_interest=" + information_z[4] + '&first_apply=' + information_z[5] + '&second_apply=' + information_z[6];    
}
var cancel_bt = document.getElementById("cancel_zy");
cancel_bt.addEventListener("click", cancel_fc);
cancel_bt.addEventListener("mouseover", function () {
    this.style = "cursor:pointer";
});
//打开报名完成页
async function submit_fc() {
    try {
        let body = {
            name: information_z[0],
            major: information_z[1],
            phone: information_z[2],
            email: information_z[3],
            interest: information_z[4],
            experience: "",
            chosen: [document.getElementById("first_zy").innerHTML, document.getElementById("second_zy").innerHTML],
        };
        let response = await fetch("/Hustsvo_Enter.php", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json; charset=utf8'
            },
        });
        let responseJson = await response.json();
        console.log(responseJson)
        if (responseJson.statusCode == 200) {
            window.open('./done.html') //跳轉报名成功
        } else {
            alert(responseJson.message);
        }
    } catch (error) {
        console.log(error)
    }
}
var submit_bt = document.getElementById("submit_zy")
submit_bt.addEventListener("click", submit_fc);
submit_bt.addEventListener("mouseover", function () {
    this.style = "cursor:pointer";
});
function getInformation_l() {
    //这他妈才是正确的解析地址函数编写！！！！，去他妈的。zy写的那个怎么复用！！！

    //所有信息的数组

    //获取URL字符串
    var myUrl = location.href;
    //alert(myUrl); 
    //获取URL中？后的参数字符串
    var parameterStr = myUrl.split("?")[1];
    //分割字符串，生成存放参数名和参数值的数组
    var parArray = parameterStr.split("&");

    //遍历数组，获取每个参数的参数名和参数值 
    for (var i = 0; i < parArray.length; i++) {
        var parameter = parArray[i];

        //分割字符串，获取参数名、参数值
        var parName = parameter.split("=")[0];
        //参数名(一般声明为英文)为中文时进行解码
        parName = decodeURI(parName);

        var parValue = parameter.split("=")[1];
        //参数值为中文时进行解码
        parValue = decodeURI(parValue);
        //alert(parName+"="+parValue);
        information_z[i] = parValue;
    }
    //修改对应信息
    return information_z;

}



function getInformation_z(information_z) {
/*     //所有信息的数组

    //获取URL字符串
    var myUrl = location.href;
    //alert(myUrl); 
    //获取URL中？后的参数字符串
    var parameterStr = myUrl.split("?")[1];
    //分割字符串，生成存放参数名和参数值的数组
    var parArray = parameterStr.split("&");

    //遍历数组，获取每个参数的参数名和参数值 
    for (var i = 0; i < parArray.length; i++) {
        var parameter = parArray[i];

        //分割字符串，获取参数名、参数值
        var parName = parameter.split("=")[0];
        //参数名(一般声明为英文)为中文时进行解码
        parName = decodeURI(parName);

        var parValue = parameter.split("=")[1];
        //参数值为中文时进行解码
        parValue = decodeURI(parValue);
        //alert(parName+"="+parValue);
        information_z[i] = parValue;
    }
    //修改对应信息
    console.log(information_z[6]);
 */
    document.getElementById("name_zy").innerHTML = information_z[0];
    document.getElementById("major_zy").innerHTML = information_z[1];
    document.getElementById("phonenumber_zy").innerHTML = information_z[2];
    document.getElementById("email_zy").innerHTML = information_z[3];
    document.getElementById("specialty_zy").innerHTML = information_z[4];
    if (information_z[5] == 1) {
        document.getElementById("first_zy").innerHTML = "人事部";
    }
    else if (information_z[5] == 2) {
        document.getElementById("first_zy").innerHTML = "文化创意部";
    }
    else if (information_z[5] == 3) {
        document.getElementById("first_zy").innerHTML = "对外联系部";
    }
    else if (information_z[5] == 4) {
        document.getElementById("first_zy").innerHTML = "品牌运营部";
    }
    else if (information_z[5] == 5) {
        document.getElementById("first_zy").innerHTML = "创业教育部";
    }
    else if (information_z[5] == 6) {
        document.getElementById("first_zy").innerHTML = "就业创业部";
    }
    else if (information_z[5] == 7) {
        document.getElementById("first_zy").innerHTML = "项目管理部";
    }
    else if (information_z[5] == 8) {
        document.getElementById("first_zy").innerHTML = "产品工作室";
    }
    if (information_z[6]) {
        if (information_z[6] == 1) {
            document.getElementById("second_zy").innerHTML = "人事部";
        }
        else if (information_z[6] == 2) {
            document.getElementById("second_zy").innerHTML = "文化创意部";
        }
        else if (information_z[6] == 3) {
            document.getElementById("second_zy").innerHTML = "对外联系部";
        }
        else if (information_z[6] == 4) {
            document.getElementById("second_zy").innerHTML = "品牌运营部";
        }
        else if (information_z[6] == 5) {
            document.getElementById("second_zy").innerHTML = "创业教育部";
        }
        else if (information_z[6] == 6) {
            document.getElementById("second_zy").innerHTML = "就业创业部";
        }
        else if (information_z[6] == 7) {
            document.getElementById("second_zy").innerHTML = "项目管理部";
        }
        else if (information_z[6] == 8) {
            document.getElementById("second_zy").innerHTML = "产品工作室";
        }
        else if (information_z[6] == 'NaN') {
            document.getElementById("second_zy").innerHTML = "(没有选哦)";
        }
    }
}


window.onload = function () {
    // cancel_fc();
    // submit_fc();         这个写的有问题，我注释掉了
    getInformation_z(getInformation_l());
}

