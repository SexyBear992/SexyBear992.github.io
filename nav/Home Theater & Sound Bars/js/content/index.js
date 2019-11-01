const routes=[
    { path: '', redirect: '/foo' },
    {
        name:"Foo",
        path:'/foo',
        
        component:Foo
    },
    { 
        name:"Bar",
        path: '/bar',
        component: Bar 
    },
    { 
        name:"four",
        path: '/four',
        component: four 
    },
    { 
        name:"three",
        path: '/three',
        component: three 
    },
]
const router=new VueRouter({
    // mode:'history',
    routes,

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
    },
    methods: {

    },
    components: {
        myfooter
    },
    router,
}).$mount("#app")
