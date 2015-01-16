/**
 * Created by azq on 2015/1/16.
 */
;(function(){
    var sWidth = window.innerWidth;
    var s = sWidth / 320;
    document.body.style.zoom = s;
    var wrap = document.getElementById("wrap");
    var pic  = wrap.children;
    var index = 0;
    var imgW = 160;
    document.getElementById("pre").addEventListener("click",function(){
        index++;
        wrap.style.transform = "translateX("+-imgW+"px)";
        wrap.style.webkitTransition = "all 1s cubic-bezier(1,1,1,1) 0";
        setTimeout(function(){
            var li = pic[0];
            wrap.removeChild(pic[0]);
            wrap.appendChild(li);
        },1000)


    },false)
})()