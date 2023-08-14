// 获取元素
// console.log(document.getElementById("dada"),"78989")
var gdada = document.getElementById("dada")
// console.log(gdada,"11111")
// 鼠标按下事件
gdada.onmousedown = function (ev) {
  var ev = ev || window.event;

  // 获取鼠标相对于盒子坐标
  var x1 = ev.offsetX;
  var y1 = ev.offsetY;
  console.log;

  // 鼠标移动
  document.onmousemove = function (ev) {
    var ev = ev || window.event;
    var y2 = ev.pageY;
    var x2 = ev.pageX;
    console.log;
    gdada.style.top = y2 - y1 + "px";
    gdada.style.left = x2 - x1 + "px";

  }
}

// 鼠标移开事件
document.onmouseup = function () {
  document.onmousemove = function () {

  }
  // console.log(gdada,"111112")
}

// 文字逐个出现效果
// 这种效果一般
// var str = " 这里是王景玉的主页!"
// var i = 0;

// function typing() {
//     var divTyping = document.getElementById('divTyping')
//     if (i <= str.length) {
//         divTyping.innerHTML = str.slice(0, i++) + "|";
//         setTimeout("typing()", 150)
//     } else {
//         divTyping.innerHTML = str;
//     }
// }
// typing();
//稍微牛逼一点的,用了github上的一个js库
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 60
});


// 时间显示
function showTime() {
  var time = new Date(); //通过构造函数创建Date方法
  var hours = time.getHours(); //小时
  var minute = time.getMinutes(); //分钟
  var second = time.getSeconds(); //秒数
  //当时间<=9就在前面添加0
  hours = hours <= 9 ? "0" + hours : hours; //条件运算符,如果条件成立则执行A语句:不成立则执行B语句
  minute = minute <= 9 ? "0" + minute : minute;
  second = second <= 9 ? "0" + second : second;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
}

setInterval(function(){
  showTime();
},1000);

// 倒计时
var showtime = function () {
  var nowtime = new Date(),  //获取当前时间
      endtime = new Date("2023/7/26");  //定义结束时间
  var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
      leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
      lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
      leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
      lefts = Math.floor(lefttime/1000%60);  //计算秒数
  return leftd + "天" + lefth + ":" + leftm + ":" + lefts;  //返回倒计时的字符串
}

var div = document.getElementById("showtime");
setInterval (function () {
    div.innerHTML = showtime();
}, 1000);  //反复执行函数本身