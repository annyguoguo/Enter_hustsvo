/*
传出数据的页面，在访问接受数据页面的时候，<a></a>里面这个href,需要动态修改，修改成
目标网址 + ？ 以及你要传输的数值
example:    href="lakniubi.com?parma1=1&parma2=2"
    每个值得格式 name=value
    值与值之间用&连接

*/



//编码中文
function tozzz(){
var name_z = document.getElementById("usr_name_l").value;
var major_z = document.getElementById("usr_department_l").value;
var phone_z = ducument.getElementById("usr_phone_number_l").value;
var email_z = ducument.getElementById("reason_of_email_l").value;
var special_z = document.getElementById("strong_point_of_usr_l").value;
var myUrl = "zy_1.html"+"?"+"name="+name_z+"&major="+major_z+"&phone="+phone_z+"&email="+email_z+"&special="+special_z;
window.location.assign(myUrl);
}

       //你的把你要的传的url存在这个变量里面，格式在最开始我说过了。
        // 可以用字符串拼接，自动搞这个you_url,至于怎么搞,我不会,反正我能想到的就是动态拼接.

    /*    function encodeChinese(my_url){
            return encodeURIComponent(my_url);
        }

        var result_url = encodeChinese(you_url);
      */  //可以动态的，改变你在html中，a标签的href为这个变量，没有问题的。


//解码以及使用

        //调用方法：var a = UrlParam.paramValues("a");      
        // 返回的就是a的值。其他功能你自己读吧，这个功能就够了。

        //////////////////////////////////////////////////////////////////////////////
       /* //别人的code
        UrlParam = function() { // url参数
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
                    } else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c 舍弃
                    continue;
                    } else if (typeof(index[p[0]]) == 'undefined') { // c=aaa    
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
            param : function(o) { // o: 参数名或者参数次序
                try {    
                return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]);    
                } catch (e) {    
                }    
            },    
            //获得参数组, 类似request.getParameterValues()    
            paramValues : function(o) { //  o: 参数名或者参数次序
                try {    
                return (typeof(o) == 'number' ? data[o] : data[index[o]]);    
                } catch (e) {}    
            },    
            //是否含有paramName参数
            hasParam : function(paramName) {
                return typeof(paramName) == 'string' ? typeof(index[paramName]) != 'undefined' : false;
            },    
            // 获得参数Map ,类似request.getParameterMap()    
            paramMap : function() {
                var map = {};    
                try {    
                for (var p in index) {  map[p] = data[index[p]];  }    
                } catch (e) {}    
                return map;    
            }    
            }    
        }();
        */

        //   --------------------- 
        //   作者：晓梦_知行 
        //   来源：CSDN 
        //   原文：https://blog.csdn.net/csdn_ds/article/details/78393564 
        //   版权声明：本文为博主原创文章，转载请附上博文链接！