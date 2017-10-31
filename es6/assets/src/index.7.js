{//例1  默认值
    console.log('例1  默认值');
    function add(a,b=1){
        return a+b;
    }
    console.log(add(1));
}
{//例2  主动抛出错误
    console.log('例2  主动抛出错误');
    function add(a,b=1){
        if(a==0) throw new Error('this is error');//当a=0时，主动抛出异常
        return a+b;
    }
    console.log(add(1));
}
{//例3  函数中的严谨模式
    console.log('例3  函数中的严谨模式');
    function add(a,b){
        'use strict'
        return a+b;
    }
    console.log(add(1,2));
}
{//例4 获得需要传递的参数个数
    console.log('例4  获得需要传递的参数个数----获得传递的参数是必须传递的参数');
    function add1(a,b=1){
        return a+b;
    }
    console.log('有默认值：'+add1.length);
    function add2(a,b){
        return a+b;
    }
    console.log('无默认值：'+add2.length);
}
{//例5 箭头函数
    console.log('例5  箭头函数');
    let add=(a,b=1)=>a+b;
    console.log(add(1));

}
{//例6  箭头函数{}的使用
    console.log('例6  箭头函数{}的使用----当方法不是一句话时，加上{}');
    let add=(a,b=1)=> {
        console.log(a);
        return a+b;
    }
    console.log(add(1));

}