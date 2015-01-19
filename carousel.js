/**
 * Created by azq on 2015/1/16.
 */
;(function(){
    var sWidth = window.innerWidth;
    document.body.style.zoom = sWidth / 320;
    var wrap = document.getElementById("wrap");
    var pic  = wrap.children;
    var n = pic.length;
    var imgW = 160;
    var startX = 0;
    var D = 0;
    document.getElementById("next").addEventListener("click",function(){
        moveRight();
    },false);
    document.getElementById("pre").addEventListener("click",function(){
        moveLeft();
    },false);
    document.getElementById("show").addEventListener("touchstart",function(e){
        e.preventDefault();
        startX = event.targetTouches[0].pageX;
    },false);
    document.getElementById("show").addEventListener("touchmove",function(e){
        e.preventDefault();
        var X = event.targetTouches[0].pageX;
        D = startX - X;
        console.log(D);
    },false);
    document.getElementById("show").addEventListener("touchend",function(e){
        e.preventDefault();
        console.log(D);
        if (D<=0){
            moveLeft();
        }
        if (D>0){
            moveRight();
        }
    },false);
    function moveLeft(){
        var li = pic[n-1];
        wrap.removeChild(pic[n-1]);
        wrap.insertBefore(li,pic[0]);
        wrap.style.transform = "translateX("+(-imgW)+"px)";
        wrap.style.webkitTransition = "none";
        setTimeout(function(){
            wrap.style.transform = "translateX(0)";
            wrap.style.webkitTransition = "all 1s cubic-bezier(1,1,1,1) 0";
        },100);
    }
    function moveRight(){
        wrap.style.transform = "translateX("+(-imgW)+"px)";
        wrap.style.webkitTransition = "all 1s cubic-bezier(1,1,1,1) 0";
        setTimeout(function(){
            var li = pic[0];
            wrap.removeChild(pic[0]);
            wrap.appendChild(li);
            wrap.style.webkitTransition = "none";
            wrap.style.transform = "translateX(0)";
        },1000)
    }
})();