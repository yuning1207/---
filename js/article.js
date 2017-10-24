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
    alert(right_guide);
    right_guide.onclick = function() {
        share_guide.style.display = "block";
        right_guide.style.display = "none";
    }
}
addLoadEvent(article_right);