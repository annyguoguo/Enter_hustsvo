var information_z = [];
function all() {

    //定义部门序号
    var num = 0
    //定义检测是否超额的变量
    var limit = 0
    //定义选择数量
    var countc = 0
    var indexc = 0
    var lth
    var finalc
    //获取元素信息
    var renc = document.getElementById("renc");//人事部
    var wenc = document.getElementById("wenc");//文创部
    var duic = document.getElementById("duic");//外联部
    var pinc = document.getElementById("pinc");//品牌运营部
    var chuangc = document.getElementById("chuangc");//创业教育部
    var jiuc = document.getElementById("jiuc");//就业见习部
    var xiangc = document.getElementById("xiangc");//项目管理部
    var chanc = document.getElementById("chanc");//产品工作室
    var title1 = document.getElementById("title1");
    var title2 = document.getElementById("title2");
    var title3 = document.getElementById("title3");
    var confirmc = document.getElementById("confirmc");//确认圈圈
    var bodyc = document.getElementById("bodyc");//主体
    var crossc = document.getElementById("crossc");//白色叉叉
    var introblockc = document.getElementById("introblockc");//介绍块
    var enroll1c = document.getElementById("enroll1c");//报名作为第一志愿
    var enroll2c = document.getElementById("enroll2c");//报名作为第二志愿
    var pick1c = document.getElementById("pick1c");//pick作为第一志愿
    var pick2c = document.getElementById("pick2c");//pick作为第二志愿
    var clearc = document.getElementById("clearc");//清除
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    var c6 = document.getElementById("c6");
    var c7 = document.getElementById("c7");
    var c8 = document.getElementById("c8");
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var t4 = document.getElementById("t4");
    var t5 = document.getElementById("t5");
    var t6 = document.getElementById("t6");
    var t7 = document.getElementById("t7");
    var t8 = document.getElementById("t8");
    //var introtxtarr=document.getElementsByClassName("intro_textw");
    var intropicc = document.getElementById("intropicc");
    var textw1 = document.getElementById("textw1");
    var textw2 = document.getElementById("textw2");
    var textw3 = document.getElementById("textw3");
    var textw4 = document.getElementById("textw4");
    var textw5 = document.getElementById("textw5");
    var textw6 = document.getElementById("textw6");
    var textw7 = document.getElementById("textw7");
    var textw8 = document.getElementById("textw8");
    //
    var namew1 = document.getElementById("namew1");
    var namew2 = document.getElementById("namew2");
    var namew3 = document.getElementById("namew3");
    var namew4 = document.getElementById("namew4");
    var namew5 = document.getElementById("namew5");
    var namew6 = document.getElementById("namew6");
    var namew7 = document.getElementById("namew7");
    var namew8 = document.getElementById("namew8");
    //wzy1
    // var jxw=document.getElementById("jxw");
    // jxw.style.display="none";
    //var pick_containerw=document.getElementsByClassName("pick_containerw");
    //over




    //志愿数组
    var infarr = [];
    //状态数组
    var statearr = [0, 0, 0, 0, 0, 0, 0, 0];
    //按钮数组
    var namearr = [c1, c2, c3, c4, c5, c6, c7, c8]
    //名称文字数组
    var txtarr = [t1, t2, t3, t4, t5, t6, t7, t8]
    //图片数组
    var imgarr = ["images/renc.jpg", "images/wenc.jpg", "images/duic.jpg", "images/pinc.jpg", "images/chuangc.jpg", "images/jiuc.jpg", "images/xiangc.jpg", "images/chanc.jpg"]
    //介绍文字数组
    var introtxtarr = [textw1, textw2, textw3, textw4, textw5, textw6, textw7, textw8]
    //部门名字数组
    var intronamearr = [namew1, namew2, namew3, namew4, namew5, namew6, namew7, namew8]
    //点击圆圈函数
    function circleclick1(type, ctype, ttype, state) {
        limitc();
        if (limit < 2) {
            //这个地方是限制了不能选第三个的函数。我觉得交互有问题，应该可以点开，但是，不能继续选才对。
            intronamearr[num - 1].className = "nmw2on";
            bodyc.className = "bluron";//背景模糊
            introblockc.className = "introon";//介绍块显现
            intropicc.src = imgarr[num - 1];
            introtxtarr[num - 1].className = "intro_textwon";
            //wzy
            //pick_containerw.className="pick_containerw2";
            //picked的背景变成白色

            if (statearr[num - 1] == 0) {
                //infarr.push(num);
                //alert(infarr);
                //遍历数组找下标
                for (var i = 0; i <= infarr.length - 1; i++) {
                    if (infarr[i] == num) {
                        indexc = i;
                    }
                }
                //partc=indexc;//记录介绍块序号
                switch (infarr.length) {
                    case 0:
                        //ctype.src="SVG/small_circle_1.svg";
                        pick1c.className = "btnoff";
                        enroll1c.className = "btnon";
                        break;
                    case 1:
                        //ctype.src="SVG/small_circle_2.svg";
                        pick2c.className = "btnoff";
                        enroll2c.className = "btnon";
                        break;
                };

                //statearr[state]=1;
                limit = 0;
                limitc();
                //changec();
            };
        };
        limit = 0
    }
    function circleclick2(type, ctype, ttype, state) {
        intronamearr[num - 1].className = "nmw2on";
        intropicc.src = imgarr[num - 1];
        introtxtarr[num - 1].className = "intro_textwon";
        bodyc.className = "bluron";//背景模糊
        introblockc.className = "introon";//介绍块显现
        for (var i = 0; i <= infarr.length - 1; i++) {
            if (infarr[i] == num) { indexc = i };
        };
        //partc=indexc;//记录介绍块序号
        switch (indexc) {
            case 0:
                ctype.src = "SVG/small_circle_1.svg";
                pick1c.className = "btnon";
                enroll1c.className = "btnoff";
                break;
            case 1:
                ctype.src = "SVG/small_circle_2.svg";
                pick2c.className = "btnon";
                enroll1c.className = "btnoff";
                break;
        };
    }
    //志愿限额函数
    function limitc() {
        for (i = 0; i <= statearr.length - 1; i++) {
            if (statearr[i] == 1) {
                limit = limit + 1;
            }
        }
    }
    //标题变换函数
    function changec() {
        switch (limit) {
            case 0:
                title1.className = "onpic1";
                title2.className = "off";
                title3.className = "off";
                confirmc.src = "SVG/big_circle_grey.svg";

                //wzy3
                jxw.style.display = "none";
                //over

                break;
            case 1:
                title1.className = "off";
                title2.className = "onpic2";
                title3.className = "off";
                confirmc.src = "SVG/big_circle_orange.svg";

                //wzy3
                jxw.style.display = "block";
                //over

                break;
            case 2:
                title1.className = "off";
                title2.className = "off";
                title3.className = "onpic3";
                confirmc.src = "SVG/big_circle_orange.svg";

                //wzy4
                jxw.style.display = "block";
                //over

                break;
        }
    }
    //清除函数
    function clearfunction() {
        for (var i = 0; i <= statearr.length - 1; i++) {
            if (statearr[i] = 1) {
                txtarr[i].style.color = "white";
                namearr[i].src = "SVG/big_circle_black.svg";
            }
        }
        statearr = [0, 0, 0, 0, 0, 0, 0, 0];
        infarr = [];
        changec();
    }
    //确认报名函数
    function confirmfunction() {
        finalc = infarr.join();
        information_z[5] = parseInt(finalc[0]);
        information_z[6] = parseInt(finalc[2]);
        // console.log(finalc);//最后传的数据
        // window.location.href="#?"+finalc;//改目标地址
        // window.location.href="./check_information.html?"+finalc;//改目标地址
        window.location.href = "./check_information.html?" + "my_name=" + information_z[0] + '&my_major=' + information_z[1] + '&my_phone=' + information_z[2] + '&my_email=' + information_z[3] + "&my_interest=" + information_z[4] + '&first_apply=' + information_z[5] + '&second_apply=' + information_z[6];


    }
    //定义点击事件
    //确认报名按钮点击
    confirmc.onclick = function () {
        confirmfunction();
    }
    //清除按钮点击
    clearc.onclick = function () {
        clearfunction();
    }
    //白色叉叉点击
    crossc.onclick = function () {
        for (var i = 0; i <= introtxtarr.length - 1; i++) {
            introtxtarr[i].className = "intro_textw";
            intronamearr[i].className = "nmw2";
        }
        introblockc.className = "off";
        bodyc.className = "bluroff";
        pick1c.className = "btnoff";
        pick2c.className = "btnoff";
        enroll1c.className = "btnoff";
        enroll2c.className = "btnoff";
    }
    //pick按钮点击
    function cancelpick() {
        namearr[num - 1].src = "SVG/big_circle_black.svg";
        txtarr[num - 1].style.color = "white";
        //取消其在志愿数列中的排位
        for (var i = 0; i <= infarr.length - 1; i++) {
            if (infarr[i] == num) { infarr.splice(i, 1) }
        }
        //还原状态
        statearr[num - 1] = 0
        for (var i = 0; i <= statearr.length - 1; i++) {
            if (statearr[i] == 1) {
                countc = countc + 1;
            };
        }
        switch (countc) {
            case 0:
                pick1c.className = "btnoff";
                pick2c.className = "btnoff";
                enroll1c.className = "btnon";
                enroll2c.className = "btnoff";
                //console.log("0");
                break;
            case 1:
                pick1c.className = "btnoff";
                pick2c.className = "btnoff";
                enroll1c.className = "btnoff";
                enroll2c.className = "btnon";
                //console.log("1");
                break;
        }
        countc = 0;
        for (var i = 0; i <= statearr.length - 1; i++) {
            if (statearr[i] == 1) {
                namearr[i].src = "SVG/small_circle_1.svg";
            };
        }
    }
    //enroll按钮点击
    function enrollc() {
        statearr[num - 1] = 1;
        infarr.push(num);
        for (var i = 0; i <= infarr.length - 1; i++) {
            if (infarr[i] == num) {
                indexc = i;
            };
        };
        switch (indexc) {
            case 0:
                pick1c.className = "btnon";
                pick2c.className = "btnoff";
                enroll1c.className = "btnoff";
                enroll2c.className = "btnoff";
                namearr[num - 1].src = "SVG/small_circle_1.svg";
                txtarr[num - 1].style.color = "orange";
                break;
            case 1:
                pick1c.className = "btnoff";
                pick2c.className = "btnon";
                enroll1c.className = "btnoff";
                enroll2c.className = "btnoff";
                namearr[num - 1].src = "SVG/small_circle_2.svg";
                txtarr[num - 1].style.color = "orange";
                break;
        }
    }
    pick1c.onclick = function () {
        cancelpick();
        limitc();
        changec();
        limit = 0;
    }
    pick2c.onclick = function () {
        cancelpick();
        limitc();
        changec();
        limit = 0;
    }
    enroll1c.onclick = function () {
        enrollc();
        limitc();
        changec();
        limit = 0;
    }
    enroll2c.onclick = function () {
        enrollc();
        limitc();
        changec();
        limit = 0;
    }
    //人事部点击
    renc.onclick = function () {
        num = 1;
        type = renc;
        ctype = c1;
        ttype = t1;
        switch (statearr[0]) {
            case 0:
                circleclick1(renc, c1, t1, 0);
                break;
            case 1:
                circleclick2(renc, c1, t1, 0);
                break;
        }
    }
    //文创部点击
    wenc.onclick = function () {
        num = 2;
        type = wenc;
        ctype = c2;
        ttype = t2;
        switch (statearr[1]) {
            case 0:
                circleclick1(wenc, c2, t2, 1);
                break;
            case 1:
                circleclick2(wenc, c2, t2, 1);
                break;
        }
    }
    //外联部点击
    duic.onclick = function () {
        num = 3;
        type = duic;
        ctype = c3;
        ttype = t3;
        switch (statearr[2]) {
            case 0:
                circleclick1(duic, c3, t3, 2);
                break;
            case 1:
                circleclick2(duic, c3, t3, 2);
                break;
        }
    }
    //品运部点击
    pinc.onclick = function () {
        num = 4;
        type = pinc;
        ctype = c4;
        ttype = t4;
        switch (statearr[3]) {
            case 0:
                circleclick1(pinc, c4, t4, 3);
                break;
            case 1:
                circleclick2(pinc, c4, t4, 3);
                break;
        }
    }
    //创业教育部点击
    chuangc.onclick = function () {
        num = 5;
        type = chuangc;
        ctype = c5;
        ttype = t5;
        switch (statearr[4]) {
            case 0:
                circleclick1(chuangc, c5, t5, 4);
                break;
            case 1:
                circleclick2(chuangc, c5, t5, 4);
                break;
        }
    }
    //见习部点击
    jiuc.onclick = function () {
        num = 6;
        type = jiuc;
        ctype = c6;
        ttype = t6;
        switch (statearr[5]) {
            case 0:
                circleclick1(jiuc, c6, t6, 5);
                break;
            case 1:
                circleclick2(jiuc, c6, t6, 5);
                break;
        }
    }
    //项管部点击
    xiangc.onclick = function () {
        num = 7;
        type = xiangc;
        ctype = c7;
        ttype = t7;
        switch (statearr[6]) {
            case 0:
                circleclick1(xiangc, c7, t7, 6);
                break;
            case 1:
                circleclick2(xiangc, c7, t7, 6);
                break;
        }
    }
    //产工点击
    chanc.onclick = function () {
        num = 8;
        type = chanc;
        ctype = c8;
        ttype = t8;
        switch (statearr[7]) {
            case 0:
                circleclick1(chanc, c8, t8, 7);
                break;
            case 1:
                circleclick2(chanc, c8, t8, 7);
                break;
        }
    }

    function autoIninformation() {
        // console.log(window.location.href);
        if (window.location.search.substr(1).length > 1) {
            var information_z = getInformation_l();
            changeStateArrAndInfarr(information_z[5]);
            changeStateArrAndInfarr(information_z[6]);

        }
    }
    function changeStateArrAndInfarr(sub_of_volunteer) {
        // console.log(sub_of_volunteer);
        if ((sub_of_volunteer != 'NaN') && (sub_of_volunteer != 'undefined')) {
            statearr[sub_of_volunteer - 1] = 1;
            infarr.push(sub_of_volunteer);
            // console.log(infarr);
        }
    }
    autoIninformation();//执行一下
    limitc();
    console.log(limit);
    zero();


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //上面没问题了，2019年3月3日13:43:14
    var number1;
    var number2;
    function zero() {
        // for(var i=0;i<=statearr.length-1;i++){
        //     lth=lth+1;
        // }
        switch (limit) {
            case 1://如果只有一个志愿
                number1 = infarr[0];
                namearr[number1 - 1].src = "SVG/small_circle_1.svg";
                txtarr[number1 - 1].style.color = "orange";
                jxw.style.display = "block";
                break;
            case 2://如果有两个志愿
                number1 = infarr[0];
                namearr[number1 - 1].src = "SVG/small_circle_1.svg";
                txtarr[number1 - 1].style.color = "orange";
                number2 = infarr[1];
                namearr[number2 - 1].src = "SVG/small_circle_2.svg";
                txtarr[number2 - 1].style.color = "orange";
                jxw.style.display = "block";
                break;
        }
    }




}//end of all


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















window.onload = all;