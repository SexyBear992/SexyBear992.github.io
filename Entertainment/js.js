// var content1 = document.getElementsByClassName("CE1")[0];
// var E1 = document.querySelector(".E1");
// var E1enter = false;
// content1.onmouseenter = function(){
//     E1enter = true;
// }
// E1.onmouseenter=function(){
//     content1.style.top=64+"px";    
// }

// content1.onmouseleave=function(){
//     E1enter=false;
//     content1.style.top=-736+"px"
// }
// E1.onmouseleave=function(){
//     setTimeout(() => {
//         if(E1enter == false){
//             content1.style.top=-736+"px"
//         }
//     }, 50);
// }

function ZG(obj){
    var content1 = document.getElementsByClassName(obj.ce)[0];
    var E1 = document.querySelector(obj.e);
    var E1enter = false;
    content1.onmouseenter = function(){
        E1enter = true;
    }
    E1.onmouseenter=function(){
        content1.style.top=obj.top+"px";    
    }
    
    content1.onmouseleave=function(){
        E1enter=false;
        content1.style.top=obj.top2+"px"
    }
    E1.onmouseleave=function(){
        setTimeout(() => {
            if(E1enter == false){
                content1.style.top=obj.top2+"px"
            }
        }, 50);
    }
}
const a=new ZG({
    ce:"CE1",
    e:".E1",
    top:64,
    top2:-736
})
const b=new ZG({
    ce:"CE2",
    e:".E2",
    top:64,
    top2:-236
})
const c=new ZG({
    ce:"CE3",
    e:".E3",
    top:64,
    top2:-236
})

