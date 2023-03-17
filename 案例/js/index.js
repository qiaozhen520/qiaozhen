// 实现模糊查询
// 获取输入框
let keyword = document.querySelector(".keyword");
// 获取搜索的下拉列表
let SearchHelper = document.querySelector(".search-helper") 
// 定义数组，存储搜索的内容
let searchArr = ["小米手机","苹果手机","OPPO手机","VIVO手机","华为手机","小米电视","苹果手表",];
// 给输入框绑定内容改变事件
keyword.oninput = function(){
  SearchHelper.innerHTML = '';
  for (let i = 0; i < searchArr.length; i++) {
    if(searchArr[i].indexOf(keyword.value) != -1){
      SearchHelper.innerHTML += "<p>" + searchArr[i] + "</p>";
      SearchHelper.style.display = "block"
    } 
  }
}

keyword.onblur = function(){
  SearchHelper.style.display = "none"
}

// 实现轮播图的切换
let banner_img = document.querySelector(".banner_img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slide = document.querySelector(".slide");
let lis = document.querySelectorAll(".banner_btn li")
let ImgArr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

let index = 0;

// 定义一个函数 用来切换图片的路径
function CutImg(){
  banner_img.src = "./images/" + ImgArr[index];
  for(let i = 0 ; i < lis.length;i++){
    lis[i].className = ''
  }
  lis[index].className = 'active'
}

// 设置定时器每隔三秒切换一次
let timer = setInterval(function(){
  index++;
  if(index  >ImgArr.length-1){
    index = 0
  }
  CutImg();
},2000)

// 点击下一张切换
next.addEventListener("click",function(){
  index++;
  if(index > ImgArr.length-1){
    index = 0
  }
  CutImg();
});
// 点击上一张切换
prev.addEventListener("click",function(){
  index--;
  if(index < 0){
    index = ImgArr.length-1
  }
  CutImg();
});
// 鼠标经过停止切换
slide.addEventListener("mouseover",function(){
  clearInterval(timer);
})
// 鼠标离开开始运行
slide.addEventListener("mouseout",function(){
  timer = setInterval(function(){
    index++;
    if(index  >ImgArr.length-1){
      index = 0
    }
    CutImg();
  },2000)
})

for(let i = 0 ; i < lis.length;i++){
  lis[i].addEventListener("click",function(){
    index = i;
    CutImg();
  })
}

// 右侧轮播图
let prev1 = document.querySelector(".prev1")
let next1 = document.querySelector(".next1")
let banner_img1 = document.querySelector(".banner_img1")
let banner_img2 = document.querySelector(".banner_img2")
let banner_img3 = document.querySelector(".banner_img3")
let ImgArr1 = ["sm1.png","sm2.png","sm3.png","sm4.png","sm5.png","sm6.jpg","sm7.png"]

let index1 = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

function Toggle(){
  banner_img1.src = "./images/" + ImgArr1[getRandomInt(1,3)]
  banner_img2.src = "./images/" + ImgArr1[getRandomInt(4,6)]
  banner_img3.src = "./images/" + ImgArr1[getRandomInt(1,7)]
}

let timer1 = setInterval(function(){
  index1++;
  if(index1> ImgArr1.length-1){
    index1=1
  }
  Toggle();

},2000)

prev1.addEventListener("click",function(){
  index1++;
  if(index1 > ImgArr1.length-1){
    index1 = 0
  }
  Toggle();
})

next1.addEventListener("click",function(){
  index1--;
  if(index1 < 0){
    index1 = ImgArr1.length-1
  }
  Toggle();
})

// 倒计时
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
function Countdown(){
  let time = new Date();
  let h = time.getHours;
  let m = time.getMinutes;
  let s = time.getSeconds;

 
}
Countdown();

