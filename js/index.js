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
        if (window.event, button) {
            var buttonnum = window.event.button;
            if (buttonnum == 1) {
                fix_con_all.style.right = "-200px";
            }
        } else if (event.button) {
            var buttonnum = event.button;
            if (buttonnum == 0) {
                fix_con_all.style.right = "-200px";
            }
        }
    }

}
addLoadEvent(nav_slide);
addLoadEvent(fix_con);