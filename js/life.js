function life_guide() {
    if (!document.getElementById)
        return false;
    var guide = document.getElementById("life_guide");
    var links = guide.getElementsByTagName("a");
    var _2017 = document.getElementById("_2017_c");
    var _2016 = document.getElementById("_2016_c");
    var _2015 = document.getElementById("_2015_c");
    var _2014 = document.getElementById("_2014_c");
    var top2017 = _2017.offsetTop + 74;
    var top2016 = _2016.offsetTop + 74;
    var top2015 = _2015.offsetTop + 74;
    var top2014 = _2014.offsetTop + 74;
    var timer;
    links[0].onclick = function() {
        var speed;
        var top0, top1, top2;
        timer = setInterval(function() {
            top0 = document.documentElement.scrollTop || document.body.scrollTop;
            top1 = top2017 - top0;
            speed = top1 / 3;
            document.documentElement.scrollTop = document.body.scrollTop = top0 + speed;
            top2 = document.documentElement.scrollTop || document.body.scrollTop;
            if (top2 >= top2017 - 10 && top2 <= top2017 + 10) {
                timer = clearInterval(timer);
            } else if (document.documentElement.scrollHeight == document.documentElement.clientHeight + top2) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
    links[1].onclick = function() {
        var speed;
        var top0, top1, top2;
        timer = setInterval(function() {
            top0 = document.documentElement.scrollTop || document.body.scrollTop;
            top1 = top2016 - top0;
            speed = top1 / 3;
            document.documentElement.scrollTop = document.body.scrollTop = top0 + speed;
            top2 = document.documentElement.scrollTop || document.body.scrollTop;
            if (top2 >= top2016 - 10 && top2 <= top2016 + 10) {
                timer = clearInterval(timer);
            } else if (document.documentElement.scrollHeight == document.documentElement.clientHeight + top2) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
    links[2].onclick = function() {
        var speed;
        var top0, top1, top2;
        timer = setInterval(function() {
            top0 = document.documentElement.scrollTop || document.body.scrollTop;
            top1 = top2015 - top0;
            speed = top1 / 3;
            document.documentElement.scrollTop = document.body.scrollTop = top0 + speed;
            top2 = document.documentElement.scrollTop || document.body.scrollTop;
            if (top2 >= top2015 - 10 && top2 <= top2015 + 10) {
                timer = clearInterval(timer);
            } else if (document.documentElement.scrollHeight == document.documentElement.clientHeight + top2) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
    links[3].onclick = function() {
        var speed;
        var top0, top1, top2;
        timer = setInterval(function() {
            top0 = document.documentElement.scrollTop || document.body.scrollTop;
            top1 = top2014 - top0;
            speed = top1 / 3;
            document.documentElement.scrollTop = document.body.scrollTop = top0 + speed;
            top2 = document.documentElement.scrollTop || document.body.scrollTop;
            if (top2 >= top2014 - 10 && top2 <= top2014 + 10) {
                timer = clearInterval(timer);
            } else if (document.documentElement.scrollHeight == document.documentElement.clientHeight + top2) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
}
addLoadEvent(life_guide);