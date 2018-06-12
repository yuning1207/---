function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function nav_slide() {
    if (!document.getElementById) {
        return false;
    }
    var index_nav = document.getElementById("index_nav");
    var in0 = document.getElementById("in0");
    var in1 = document.getElementById("in1");
    var in2 = document.getElementById("in2");
    // var in3 = document.getElementById("in3");
    var in4 = document.getElementById("in4");
    var border_b = document.getElementById("border_b");
    in0.onmouseover = function() {
        border_b.style.left = "5%";
    }
    in1.onmouseover = function() {
        border_b.style.left = "30%";
    }
    in2.onmouseover = function() {
            border_b.style.left = "55%";
        }
        // in3.onmouseover = function() {
        //     border_b.style.left = "64%";
        // }
    in4.onmouseover = function() {
        border_b.style.left = "81%";
    }
}

function fix_con() {
    var fix_con = document.getElementById("fix_con");
    var fix_con_all = document.getElementById("fix_con_all");
    fix_con.onclick = function() {

        fix_con_all.style.right = "80px";
        document.onmousedown = function(ev) {
            var oEvent = ev || event; //IE浏览器直接使用event或者window.event得到事件本身。
            if (oEvent.button == 1 || oEvent.button == 2 || oEvent.button == 0) {
                fix_con_all.style.right = "-200px";
            } // IE下鼠标的 左键是1 ，  右键是2   ff和chrome下 鼠标左键是0  右键是2
        }
    }
}

function scroll() {
    var top = document.getElementById("fix_top");
    var con = document.getElementById("fix_con");
    var con_all = document.getElementById("fix_con_all");
    var timer;
    window.onscroll = function() {
        if (document.documentElement.scrollTop != 0 || document.body.scrollTop != 0) {
            top.style.display = "block";
            con.style.bottom = "66px";
            con_all.style.bottom = "66px";
        } else {
            top.style.display = "none";
            con.style.bottom = "15px";
            con_all.style.bottom = "15px";
        }
    }
    top.onclick = function() {
        var tops, speed;
        var top0;
        timer = setInterval(function() {
            tops = document.documentElement.scrollTop || document.body.scrollTop;
            speed = tops / 4;
            document.documentElement.scrollTop = document.body.scrollTop = tops - speed;
            top0 = document.documentElement.scrollTop || document.body.scrollTop;
            if (top0 == 0) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
}

function addclass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newclassname = element.className;
        newclassname += " ";
        newclassname += value;
        element.className = newclassname;
    }
}

function blog_list() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    function allarticle(datalist) {
        for (var i = 0, len = datalist.length; i < len; i++) {
            var div = document.createElement("div");
            addclass(div, "article");
            var rows = document.createElement("div");
            addclass(rows, "rows");
            var divimg = document.createElement("div");
            addclass(divimg, "a_img col-xs-3 col-md-3");
            var img = document.createElement("img");
            var img_src = datalist[i]["picture"];
            img.setAttribute("src", img_src);
            img.setAttribute("alt", "博文图片");
            divimg.appendChild(img);
            var divcon = document.createElement("div");
            addclass(divcon, "a_con col-xs-8 col-md-8");
            var a_title = document.createElement("div");
            addclass(a_title, "a_title");
            if (datalist[i]["is_top"]) {
                var topimg = document.createElement("img");
                topimg.setAttribute("src", "img/is_top.png");
                a_title.appendChild(topimg);
                alert('is_top');
            }
            var a = document.createElement("a");
            var a_text = document.createTextNode(datalist[i]["title"]);
            a.appendChild(a_text)
            a_title.appendChild(a);
            var a_body = document.createElement("div");
            addclass(a_body, "a_body");
            var body_text = document.createTextNode(datalist[i]["description"]);
            a_body.appendChild(body_text);
            divcon.appendChild(a_title);
            divcon.appendChild(a_body);
            var clear = document.createElement("div");
            clear.setAttribute("style", "clear:both");
            rows.appendChild(divimg);
            rows.appendChild(divcon);
            rows.appendChild(clear);
            var divfoot = document.createElement("div");
            addclass(divfoot, "a_foot");
            var span1 = document.createElement("span");
            addclass(span1, "a_data");
            var i1 = document.createElement("i");
            addclass(i1, "fa fa-clock-o");
            var text1 = document.createTextNode(datalist[i]["date"]);
            span1.appendChild(i1);
            span1.appendChild(text1);
            var span2 = document.createElement("span");
            addclass(span2, "a_author");
            var i2 = document.createElement("i");
            addclass(i2, "fa fa-user");
            var text2 = document.createTextNode("yuning");
            span2.appendChild(i2);
            span2.appendChild(text2);
            var span3 = document.createElement("span");
            addclass(span3, "a_language");
            var i3 = document.createElement("i");
            addclass(i3, "fa fa-tag");
            var text3 = document.createTextNode("");
            var a3 = document.createElement("a");
            var a3text = document.createTextNode(datalist[i]["mark"]);
            a3.appendChild(a3text);
            span3.appendChild(i3);
            span3.appendChild(a3);
            var span4 = document.createElement("span");
            addclass(span4, "a_comment");
            var i4 = document.createElement("i");
            addclass(i4, "fa fa-eye");
            var text4 = document.createTextNode(datalist[i]["viewNum"]);
            span4.appendChild(i4);
            span4.appendChild(text4);
            var span5 = document.createElement("span");
            addclass(span5, "a_see");
            var i5 = document.createElement("i");
            addclass(i5, "fa fa-comment");
            var text5 = document.createTextNode("11");
            span5.appendChild(i5);
            span5.appendChild(text5);
            var clear2 = document.createElement("div");
            clear2.setAttribute("style", "clear:both");
            divfoot.appendChild(span1);
            divfoot.appendChild(span2);
            divfoot.appendChild(span3);
            divfoot.appendChild(span4);
            divfoot.appendChild(span5);
            divfoot.appendChild(clear2);
            var clear1 = document.createElement("div");
            clear1.setAttribute("style", "clear:both");
            div.appendChild(rows);
            div.appendChild(divfoot);
            div.appendChild(clear1);
            var index_left = document.getElementById("index_left");
            var index_pingination = document.getElementById("index_pingination")
            index_left.insertBefore(div, index_pingination);
        }
    }

    function pagination(pageinfo) {
        var div = document.getElementById("index_pingination");
        var ul = document.createElement("ul");
        addclass(ul, "pagination")
        var lipre = document.createElement("li");
        var prea = document.createElement("a");
        var pretext = document.createTextNode("<<");
        prea.appendChild(pretext);
        lipre.appendChild(prea);
        ul.appendChild(lipre);
        var totalpage = pageinfo["totalPage"];
        var currentpage = pageinfo["currentPage"];

        for (let i = 0; i < totalpage; i++) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            var atext = document.createTextNode(i + 1);
            a.appendChild(atext);
            li.appendChild(a);
            ul.appendChild(li);
            if ((i + 1) == currentpage) {
                addclass(li, "pa_in");
            }
            a.onclick = function() {
                var lis = ul.getElementsByTagName("li");
                var parent = this.parentElement;
                for (var i = 0; i < lis.length; i++) {
                    if (lis[i] == parent) {
                        var articles = document.getElementsByClassName("article");
                        for (var j = 0; j < articles.length; j++) {
                            articles[j].innerHTML = "";
                        }
                        ul.innerHTML = "";
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        // xhr.open("get", url + i, true);
                        // alert(url);
                        // alert(i);
                        xhr.open("get", url + 2, true);
                        xhr.send(null);
                    }
                }

            }
        }
        var linext = document.createElement("li");
        var nexta = document.createElement("a");
        var nexttext = document.createTextNode(">>");
        nexta.appendChild(nexttext);
        linext.appendChild(nexta);
        if (!pageinfo["hasNextPage"]) {
            addclass(linext, "pa_ban");
        }
        if (!pageinfo["hasPrePage"]) {
            addclass(lipre, "pa_ban");
        }
        ul.appendChild(linext);
        div.appendChild(ul);
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                // alert(xhr.responseText);
                var text = JSON.parse(xhr.responseText);
                if (text["status"] == 0) {
                    var data = text["data"];
                    var pageinfo = data["pageInfo"];
                    allarticle(data["list"]);
                    pagination(pageinfo);
                }
            } else {
                alert("error: " + xhr.status);
            }
        }
    }
    var url = "/Blog/listAll/"
    xhr.open("get", url + "1", true);
    xhr.send(null);
}
addLoadEvent(nav_slide);
addLoadEvent(fix_con);
addLoadEvent(scroll);
addLoadEvent(blog_list);