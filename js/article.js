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

function article_right() {
    if (!document.getElementById)
        return false;
    var right_guide = document.getElementById("right_guide");
    var share_guide = document.getElementById("share_guide");
    right_guide.onclick = function() {
        share_guide.style.right = "0"
        right_guide.style.display = "none";
        document.onmousedown = function(ev) {
            var oeven = ev || event;
            if (oeven.button == 1 || oeven.button == 0 || oeven.button == 2) {
                share_guide.style.right = "-28vw";
                right_guide.style.display = "block";
            }
        }
    }
}
addLoadEvent(article_right);