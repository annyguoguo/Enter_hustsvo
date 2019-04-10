var submit_flag = 0;        //1为可以提交，0为不可以提交
var phone_flag = 0;         //1为手机号格式正确，0为错误
var go_submit_l = document.getElementById("go_submit_l");
var usr_phone_number = document.getElementById('usr_phone_number_l');
var input_l = document.getElementById('input_l').getElementsByTagName('input');
var input_l_flag = new Array();      //用来接每一个input的动画,描述状态
var information_z = [];

for (var i = 0; i < input_l.length; i++) {
    //为每个input 的input 状态绑定函数
    input_l[i].addEventListener('input', checkSubmit);
    input_l[i].addEventListener('focus', changeStyle);
    input_l[i].addEventListener('blur', changeStyleBack);
}
document.getElementsByTagName('textarea')[0].addEventListener('focus', changeStyle);
document.getElementsByTagName('textarea')[0].addEventListener('blur', function () {
    this.style.borderColor = '#ccc';
    this.previousSibling.previousSibling.style.color = '#ccc';

});
//绑定各种事件

function changeStyleBack() {
    //changeStyleBack
    if (this.id == 'usr_phone_number_l') {
        if (checkPhoneNumber()) {
            this.style.borderColor = '#ccc';
            this.previousSibling.previousSibling.style.color = '#ccc';
            this.nextSibling.nextSibling.style.display = 'none';
        } else {
            this.style.borderColor = '#b00020';
            this.previousSibling.previousSibling.style.color = '#b00020';
            this.nextSibling.nextSibling.style.display = 'block';
        }
    }
    else {
        if (this.value == '') {
            this.style.borderColor = '#b00020'
            this.previousSibling.previousSibling.style.color = '#b00020';
            this.nextSibling.nextSibling.style.display = 'block';
        } else {
            this.style.borderColor = '#ccc';
            this.previousSibling.previousSibling.style.color = '#ccc';
            this.nextSibling.nextSibling.style.display = 'none';
        }
    }
}
//变色


function changeStyle() {
    this.style.borderColor = '#ff9000';
    this.previousSibling.previousSibling.style.color = '#ff9000';
    this.previousSibling.previousSibling.style.display = "block";
    if (this.id !== 'strong_point_of_usr_l')
        this.nextSibling.nextSibling.style.display = 'none';

}


function checkPhoneNumber() {
    //成功检测手机号格式！
    var value_usr_phone_number = usr_phone_number.value;
    value_usr_phone_number_arr = String(value_usr_phone_number);
    if (value_usr_phone_number_arr.length == 11) {
        phone_flag = 1;   //手机号格式对了  牛逼啊，手机号格式对了！！
        return 1;
    } else
        phone_flag = 0;   //手机号格式不对  jb手机号格式都对不了！！
    return 0;
}

function checkSubmit() {
    //遍历所有input,用来改变提交的格式
    checkPhoneNumber();             //我知道每次都检测一边很浪费，但是我用addeventlistener出现了问题，似乎他每次点击，都只会执行绑定的两个函数中的一个，所以我直接干脆这样写了。
    for (var i = 0; i < input_l.length; i++) {
        if (input_l[i].value == "") {
            submit_flag = 0;
            break;
        }
        submit_flag = 1;
    }

    if (submit_flag && phone_flag) {
        document.getElementById('go_submit_l').style.display = 'block';
    } else {
        document.getElementById('go_submit_l').style.display = 'none';
    }
    return;
}
window.addEventListener('load', function () {
    parsingTheAddress(getInformation_l());
    checkSubmit();
});    //解决一进入提交需要修改才显示的问题。

var url = window.location.search.substr(1);
var first_apply = parseInt(url[0]);
var second_apply = parseInt(url[2]);
var my_name, my_major, my_phone, my_email, my_interest;
var information_l = [];
document.getElementById('go_submit_l').addEventListener('click', function submitAll() {
    getInformation_l();
    changeHref(getValue());
});
function getValue() {
    //提交时刻获取所有值
    information_l[0] = document.getElementById('usr_name_l').value;
    information_l[1] = document.getElementById('usr_department_l').value;
    information_l[2] = document.getElementById('usr_phone_number_l').value;
    information_l[3] = document.getElementById('usr_email_address_l').value;
    information_l[4] = document.getElementById('strong_point_of_usr_l').value;
    information_l[5] = getInformation_l()[5];
    information_l[6] = getInformation_l()[6];
    return information_l;
}
function changeHref(information_z) {
    //改变地址传输数据
    //给zy
    //document.getElementById('go_submit_for_change_href').href = "./zy_1.html?"+"my_name="+my_name+'my_major='+my_major+'my_phone='+my_phone+'my_email='+my_email+"my_interest="+my_interest+'first_apply='+first_apply+'second_apply='+second_apply;
    //修改了一下url方便提取
    document.getElementById('go_submit_for_change_href').href = "./zy_1.html?" + "my_name=" + information_z[0] + '&my_major=' + information_z[1] + '&my_phone=' + information_z[2] + '&my_email=' + information_z[3] + "&my_interest=" + information_z[4] + '&first_apply=' + information_z[5] + '&second_apply=' + information_z[6];
}

document.getElementById('go_back_to_intro').addEventListener('click', passDataToCjw)
//传数据给cjw
//我他吗写的垃圾屎山级别传数据
function passDataToCjw() {
    var information_z = getValue();
    document.getElementById('go_back_to_intro').href = "./intro.html?" + "my_name=" + information_z[0] + '&my_major=' + information_z[1] + '&my_phone=' + information_z[2] + '&my_email=' + information_z[3] + "&my_interest=" + information_z[4] + '&first_apply=' + information_z[5] + '&second_apply=' + information_z[6];
}

function parsingTheAddress(information_z) {
    console.log(information_z[1]);
    if (information_z[0] != 'undefined') {
        document.getElementById('usr_name_l').value = information_z[0];
    }
    if (information_z[1] != 'undefined')
        document.getElementById('usr_department_l').value = information_z[1];
    if (information_z[2] != 'undefined')
        document.getElementById('usr_phone_number_l').value = information_z[2];
    if (information_z[3] != 'undefined')
        document.getElementById('usr_email_address_l').value = information_z[3];
    if (information_z[4] != 'undefined')
        document.getElementById('strong_point_of_usr_l').value = information_z[4];
}
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





/*
//暂时用不到编码模块了

//你的把你要的传的url存在这个变量里面，格式在最开始我说过了。
// 可以用字符串拼接，自动搞这个you_url,至于怎么搞,我不会,反正我能想到的就是动态拼接.

function encodeChinese(my_url) {
    return encodeURIComponent(my_url);
}

var result_url = encodeChinese(you_url);
//可以动态的，改变你在html中，a标签的href为这个变量，没有问题的。


//解码以及使用

//调用方法：var a = UrlParam.paramValues("a");
// 返回的就是a的值。其他功能你自己读吧，这个功能就够了。

//////////////////////////////////////////////////////////////////////////////
//别人的code
UrlParam = function () { // url参数
    var data, index;
    (function init() {
        data = [];    //值，如[["1","2"],["zhangsan"],["lisi"]]
        index = {};   //键:索引，如{a:0,b:1,c:2}
        var u = window.location.search.substr(1);
        if (u != '') {
            var params = decodeURIComponent(u).split('&');
            for (var i = 0, len = params.length; i < len; i++) {
                if (params[i] != '') {
                    var p = params[i].split("=");
                    if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p= | =
                        data.push(['']);
                        index[p[0]] = data.length - 1;
                    } else if (typeof (p[0]) == 'undefined' || p[0] == '') { // =c 舍弃
                        continue;
                    } else if (typeof (index[p[0]]) == 'undefined') { // c=aaa
                        data.push([p[1]]);
                        index[p[0]] = data.length - 1;
                    } else {// c=aaa
                        data[index[p[0]]].push(p[1]);
                    }
                }
            }
        }
    })();
    return {
        // 获得参数,类似request.getParameter()
        param: function (o) { // o: 参数名或者参数次序
            try {
                return (typeof (o) == 'number' ? data[o][0] : data[index[o]][0]);
            } catch (e) {
            }
        },
        //获得参数组, 类似request.getParameterValues()
        paramValues: function (o) { //  o: 参数名或者参数次序
            try {
                return (typeof (o) == 'number' ? data[o] : data[index[o]]);
            } catch (e) { }
        },
        //是否含有paramName参数
        hasParam: function (paramName) {
            return typeof (paramName) == 'string' ? typeof (index[paramName]) != 'undefined' : false;
        },
        // 获得参数Map ,类似request.getParameterMap()
        paramMap: function () {
            var map = {};
            try {
                for (var p in index) { map[p] = data[index[p]]; }
            } catch (e) { }
            return map;
        }
    }
}();

 */