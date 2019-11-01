let str2 = ` <div class="item">
<div class="img_wrap">
  <span>AWARD WINNER</span>
  <img src="./img/list/8k.png" alt="" class="k8">
  <img :src="myimg" alt="">
</div>
<p class="tv_name">Z9G | MASTER Series | LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)</p>
<p class="tv_px">XBR Z9G Series</p>
<div class="svg_wrap">
  <svg t="1569676329867" class="icon" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="2253" width="200" height="200">
    <path
      d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"
      p-id="2254" fill="#dc3a1a"></path>
  </svg>
  <svg t="1569676329867" class="icon" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="2253" width="200" height="200">
    <path
      d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"
      p-id="2254" fill="#dc3a1a"></path>
  </svg>
  <svg t="1569676329867" class="icon" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="2253" width="200" height="200">
    <path
      d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"
      p-id="2254" fill="#dc3a1a"></path>
  </svg>
  <svg t="1569676329867" class="icon" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="2253" width="200" height="200">
    <path
      d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"
      p-id="2254" fill="#dc3a1a"></path>
  </svg>
  <svg t="1569676329867" class="icon" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="2253" width="200" height="200">
    <path
      d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"
      p-id="2254" fill="#ccc"></path>
  </svg>
  (5)
</div>
<!-- list-style-type: square; -->
<div class="item_wrap">
  <ul>
    <li>Picture Processor X1™ Ultimate for unparalleled realism</li>
    <li>Unprecedented contrast with Backlight Master Drive™</li>
    <li>Take pictures closer to 8K with 8K X-Reality™ PRO</li>
    <li>Acoustic Multi-Audio™ for an immersive viewing experience</li>
  </ul>
</div>
<div class="select_wrap">
  <div class="select">
  </div>
</div>
<div class="item_bottom">
  <p class="name">Model and price</p>
  <ul>
    <li class="active">85" class (84.6" diag)</li>
    <li>98'' class (97.6'' diag)</li>
  </ul>
  <p class="price">$12,999.99</p>
  <p class="link">More product information</p>
  <button>Where To Buy</button>
</div>
</div>`

const item = {
    name: "Item",
    data() {
        return {

        }
    },
    methods: {

    },
    props:["myimg"],
    template: str2
}