window.onload = function() {
    var textDom = document.getElementById("text");
    var can = document.getElementById("can");
    var ctx = can.getContext("2d");
    //can.width = window.document.body.clientWidth;
    //can.width = "100%";
    //can.height = "200";
    var textVal = "";
    var initz = 100;
    var thisTIme = null;
    var animTime = null;
    var grains = [];

    function drawText(text) {
        ctx.save();
        ctx.font = "100px 微软雅黑 bold";
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.fillText(text, can.width / 2, can.height / 1.5);
        //ctx.restore();
    }

    function initAnimate() {
        grains = [];
        textVal = textDom.value;
        can.width = window.document.body.clientWidth;
        can.height = "200";
        ctx.clearRect(0, 0, can.width, can.height);
        drawText(textVal);
        var imgDate = ctx.getImageData(0, 0, can.width, can.height);
        ctx.clearRect(0, 0, can.width, can.height);
        for (var i = 0; i < imgDate.width; i += 3) { //3为点距
            for (var j = 0; j < imgDate.height; j += 3) {
                var index = (j * imgDate.width + i) * 4; //整体宽度
                if (imgDate.data[index] > 128) {
                    var grain = new Grain(i, j, 0, 3); //3为白点点大小
                    grains.push(grain);
                }
            }
        }
        animate();
    }

    var lock = true;
    var pause = false;

    /*
        this.x = Math.random()*can.width;//x轴坐标
        this.y = Math.random()*can.height;//y轴坐标
        this.z = Math.random()*initz*2;//z轴坐标
        this.ix = Math.random()*can.width;//初始化x轴坐标
        this.iy = Math.random()*can.height;//初始化y轴坐标
        this.iz = Math.random()*initz*2;//初始化z轴坐标
        this.tx = x;//目标x轴坐标
        this.ty = y;//目标y轴坐标
        this.tz = z;//目标z轴坐标
    */
    function Grain(x, y, z, r) {
        this.x = Math.random() * can.width; //x轴坐标
        this.y = Math.random() * can.height; //y轴坐标
        this.z = Math.random() * initz * 2 - initz; //z轴坐标
        this.ix = Math.random() * can.width; //初始化x轴坐标
        this.iy = Math.random() * can.height; //初始化y轴坐标
        this.iz = Math.random() * initz * 2 - initz; //初始化z轴坐标
        this.tx = x; //目标x轴坐标
        this.ty = y; //目标y轴坐标
        this.tz = 0;
        this.r = r; //粒子半径
    }

    Grain.prototype = {
        draw: function() {
            //ctx.save();
            ctx.beginPath();
            var scale = initz / (initz + this.z);
            ctx.fillStyle = "rgba(255,255,255," + scale + ")";
            ctx.arc(can.width / 2 + (this.x - can.width / 2) * scale, can.height / 2 + (this.y - can.height / 2) * scale, this.r * scale, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            //ctx.restore();
        }
    }

    function animate() {
        thisTIme = new Date();
        ctx.clearRect(0, 0, can.width, can.height);
        grains.forEach(function(item) {
            if (lock) {
                if (Math.abs(item.tx - item.x) < 0.1 && Math.abs(item.ty - item.y) < 0.1 && Math.abs(item.tz - item.z) < 0.1) {
                    item.x = item.tx;
                    item.y = item.ty;
                    item.z = item.tz;
                    if (thisTIme - animTime > 1500) lock = false;
                } else {
                    item.x += (item.tx - item.x) * 0.1;
                    item.y += (item.ty - item.y) * 0.1;
                    item.z += (item.tz - item.z) * 0.1;
                    animTime = new Date();
                }
            } else {
                if (Math.abs(item.ix - item.x) < 0.1 && Math.abs(item.iy - item.y) < 0.1 && Math.abs(item.iz - item.z) < 0.1) {
                    item.x = item.ix;
                    item.y = item.iy;
                    item.z = item.iz;
                    pause = true;
                    console.log("执行完毕！");
                } else {
                    item.x += (item.ix - item.x) * 0.1;
                    item.y += (item.iy - item.y) * 0.1;
                    item.z += (item.iz - item.z) * 0.1;
                    pause = false;
                }
            }
            item.draw();
        })

        if (!pause) {
            if ("requestAnimationFrame" in window) {
                requestAnimationFrame(animate);
            } else if ("webkitRequestAnimationFrame" in window) {
                webkitRequestAnimationFrame(animate);
            } else if ("msRequestAnimationFrame" in window) {
                msRequestAnimationFrame(animate);
            } else if ("mozRequestAnimationFrame" in window) {
                mozRequestAnimationFrame(animate);
            }
        }
    }
    //用enter键提交
    document.onkeydown = function(event_e) {
        if (window.event) {
            event_e = window.event;
        }
        var int_keycode = event_e.charCode || event_e.keyCode;
        if (int_keycode == '13') {
            //your handler function,please. 
            initAnimate();
            lock = true;
            pause = false;
            //onLogin();
            return false;
        }
    }

    initAnimate();
    // window.addEventListener("resize", resizeCanvas, false);

    // function resizeCanvas() {
    //     var canvas = document.getElementById('can');
    //     canvas.width = window.document.body.clientWidth;
    //     canvas.height = "200";
    // }
    // window.onresize = function() {
    //     var canvas = document.getElementById("can");
    //     //canvas.width = window.document.body.clientWidth;
    //     canvas.width = "100%";
    //     canvas.height = "200";
    // }
}