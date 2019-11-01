
new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    components: {
        mynav,
        myfooter
    }
})

// 一
let section_li=$(".section section .content ul li")
let flex_box = $("#flex_box")
let uls = $("#flex_box .ul_wrap ul")
let index=-1;
section_li.click(function () {
    if (index != $(this).index()) {
        index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        if ($(this).index()==0) {
            flex_box.animate({
                height: "866px"
            }, 500);
        } else {
            flex_box.animate({
                height: "600px"
            }, 500);
        }
      
    } else {
        index = -1;
        flex_box.animate({
            height: "0"
        }, 400);
        $(this).removeClass("active")
    }
    uls.eq($(this).index()).css("display", "flex").siblings().css("display", "none")
})


//F3

let f3_ul = $("#f3 .wrap ul")
let f3_prev = $("#f3 .wrap .span_wrap .left")
let f3_next = $("#f3 .wrap .span_wrap .right")
let f3_index = 0;
let f3_spans = $("#f3 .banner_rudio span")
showSpan()
f3_prev.click(function () {
    if (f3_index == 4) {
        f3_index--
        f3_ul.animate({ left: -402 * 3 * f3_index + "px" });
    } else {
        f3_index--
        f3_ul.animate({ left: -402 * 2 * f3_index + "px" });
    }
    showSpan()
})
f3_next.click(function () {
    if (f3_index == 0) {
        f3_index++
        f3_ul.animate({ left: -402 * 2 * f3_index + "px" });
    }
    
    else {
        f3_index++
        f3_ul.animate({ left: -402 * 3 * f3_index + "px" });
    }
    showSpan()
})
f3_spans.click(function () {
    // console.log($(this).index());
    let index = $(this).index()
    f3_index=index
    f3_ul.animate({ left: -402 * 3 * f3_index + "px" });
    $(this).addClass("active").siblings().removeClass("active")
    showSpan()
})
function showSpan() {
    f3_spans.eq(f3_index).addClass("active").siblings().removeClass("active")
    if (f3_index == 0) {
        f3_prev.hide()
    } else {
        f3_prev.show()
    }
    if (f3_index == 4) {
        f3_next.hide()
    } else {
        f3_next.show()
    }
}

//f6
let f6_ul = $("#f6 .wrap ul")
let f6_wrap = $("#f6 .wrap")
let f6_span_wrap = $("#f6 .span_wrap")
let f6_prev = $("#f6 .wrap .span_wrap .left")
let f6_next = $("#f6 .wrap .span_wrap .right")
let f6_index = 0;
let f6_spans = $("#f6 .banner_rudio span")
f6_prev.click(function () {
    if (f6_index == 0) {
        f6_index = 1
        f6_ul.animate({ left: -1400 * f6_index + "px" });
    } else {
        f6_index--
        f6_ul.animate({ left: -1400 * f6_index + "px" });
    }
   
})
f6_wrap.hover(function () {
    f6_span_wrap.toggle(200)
})
f6_next.click(function () {
    if (f6_index == 1) {
        f6_index = 0
        f6_ul.animate({ left: -1400 * f6_index + "px" });
    } else {
        f6_index++
        f6_ul.animate({ left: -1400 * f6_index + "px" });
    }
    f6_spans.eq(f6_index).addClass("active").siblings().removeClass("active")
})
f6_spans.click(function () {
    // console.log($(this).index());
    let index = $(this).index()
    f6_index = index
    f6_ul.animate({ left: -1400 * f6_index + "px" });
    $(this).addClass("active").siblings().removeClass("active")
    f6_spans.eq(f6_index).addClass("active").siblings().removeClass("active")
})

//f10
let f10_wrap = $("#f10 .wrap")
let f10_ul = $("#f10 .wrap ul")
let f10_wrap_span = $("#f10 .wrap .wrap_span")
let f10_prev = $("#f10 .wrap .wrap_span .wrap_span_next")
let f10_next = $("#f10 .wrap .wrap_span .wrap_span_prev")
let f10_index = 0;
let f10_spans = $("#f10 .wrap_banner_rudio span")
f10_next.click(function () {
    f10_ul.animate({ left: -494 + "px" },300);
})
f10_prev.click(function () {
    f10_ul.animate({ left: -0 + "px" },300);
})
f10_wrap.hover(function () { 
    f10_wrap_span.toggle(200)
})