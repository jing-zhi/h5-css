// 切换图标
// window.onload=function(){

function myluobo1(){
    var x = document.getElementById("a1")
    x.src = "./网易img/lunboxiao1.jpg"
}

function myluobo2(){
    var x = document.getElementById("a1")
    x.src = "./网易img/lunboxiao2.jpg"
}

function myluobo3(){
    var x = document.getElementById("a1")
    x.src = "./网易img/lunboxiao3.jpg"
}

function myluobo4(){
    var x = document.getElementById("a1")
    x.src = "./网易img/lunboxiao4.jpg"
}

function myluobo5(){
    var x = document.getElementById("a1")
    x.src = "./网易img/lunboxiao5.jpg"
}

// 拖拽事件
// 获取元素
// console.log("78989")
var gdada = document.getElementById("dada")
// console.log(gdada,"11111")
// 鼠标按下事件
gdada.onmousedown = function(ev){
    var ev  = ev||window.event;

    // 获取鼠标相对于盒子坐标
    var x1 = ev.offsetX;
    var y1 = ev.offsetY;
    // console.log;

    // 鼠标移动
    document.onmousemove = function(ev){
        var ev = ev||window.event;
        var y2 = ev.pageY;
        var x2 = ev.pageX;
        console.log;
        gdada.style.top = y2-y1+"px";
        gdada.style.left = x2-x1+"px";

    }
}

// 鼠标移开事件
document.onmouseup = function(){
    document.onmousemove = function(){

    }
    // console.log(gdada,"111112")
}


//轮播图三合一
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');
var goPrebtn = document.getElementById('goPre');
var goNextbtn = document.getElementById('goNext');

var time = 0;//定时器变量

var index = 0;

var clearActive = function(){
    for( var i = 0;i < items.length;i++){
        // console.log(index);
        items[i].className="item";
    }
    for( var i = 0;i < items.length;i++){
        // console.log(index);
        points[i].className="point";
    }
    
} 
 var  goIndex = function(){ 

    clearActive(); 
    items[index].className = 'item active';
    points[index].className = 'point active';
}

// var goNext = function(){
//     // index++;
//     goIndex();
// }

// var goPre = function(){
//     // index--;
//     goIndex();
// }

 goNextbtn.addEventListener('click',function(){
    // console.log("111");
      
    if(index<=3){
        index++;
    }else if(index>=4){
        index=0;
    }
    console.log(index); 
    //goNext();
    goIndex();
});

goPrebtn.addEventListener('click',function(){
    if(index==0){
        index = 4;
    }else{
        index --;
    }
    console.log(index); 
    // goPre();
    goIndex();
})
//点击小圆点事件
for(var i = 0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointsIndex = this.getAttribute('date-index');
        index = pointsIndex;
        goIndex();
        time = 0;
    })
}
console.log(2);
setInterval(function(){
    time++;
    if(time == 30){

        if(index==4){
            index=0;
        }else{
            index++;
        }
        
        goIndex();
        time = 0;
    }
},100)



