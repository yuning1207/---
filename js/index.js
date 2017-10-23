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
    var in3 = document.getElementById("in3");
    var in4 = document.getElementById("in4");
    var border_b = document.getElementById("border_b");
    in0.onmouseover = function() {
        border_b.style.left = "4%";
    }
    in1.onmouseover = function() {
        border_b.style.left = "24%";
    }
    in2.onmouseover = function() {
        border_b.style.left = "44%";
    }
    in3.onmouseover = function() {
        border_b.style.left = "64%";
    }
    in4.onmouseover = function() {
        border_b.style.left = "84%";
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
    window.onscroll = function() {
        if (document.documentElement.scrollTop = document.body.scrollTop != 0) {
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
        timer = setInterval(function() {
            tops = document.documentElement.scrollTop = document.body.scrollTop;
            speed = tops / 4;
            document.documentElement.scrollTop = document.body.scrollTop = tops - speed;
            if (document.documentElement.scrollTop = document.body.scrollTop == 0) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
}
addLoadEvent(nav_slide);
addLoadEvent(fix_con);
addLoadEvent(scroll);