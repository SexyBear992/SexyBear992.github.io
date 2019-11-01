const routes=[
    { path: '', redirect: '/foo' },
    {
        path:'/foo',
        component:Foo
    },
    { 
        path: '/bar',
        component: Bar }
]
const router=new VueRouter({
    routes
})
Vue.component("mynav",{
    template:str
});
Vue.component("item",{
    template:str2
});
Vue.component("F12",{
    template:str3
});
const obj= {
    arr1:["./img/1.webp","./img/2.webp"],
    arr2:["./img/3.webp","./img/4.webp","./img/5.webp"],
    arr3:["./img/6.webp","./img/7.webp","./img/8.webp"],
  }
new Vue({
    data: {
       obj:[1,2,3]
    },
    methods: {

    },
    components: {
        myfooter
    },
    router,
}).$mount("#app")
