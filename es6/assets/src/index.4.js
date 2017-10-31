{//例1--字符串拼接
    console.log('1、字符串拼接');
    let heheda1='呵呵',heheda2='哒';
    let blog=`<div style="white-space:pre;background: red;">你好，我是${heheda1+heheda2},    你是？
    你最近<b>好吗</b>？</div>`;
    console.log(blog);
    //document.write(blog);
    document.getElementById('one').innerHTML=blog;
}
{//例2--对运算的支持
    console.log('2、对运算的支持');
    let num1=1,num2=2;
    let blog=`字符串拼接中的运算：${num1+num2}。`;
    console.log(blog);
}
{//例3--字符串查找
    console.log('3、字符串查找');
    let string='呵呵哒';
    let strings='你好，我是呵呵哒，很高兴认识你';
    console.log(strings.indexOf(string)+'：es5写法，结果5代表着索引，第几个');
    console.log(strings.includes(string)+'：es6写法，判读内容，直接书输出true/false');
    console.log(strings.startsWith(string)+'：es6写法，判读开头，直接书输出true/false');
    console.log(strings.endsWith(string)+'：es6写法，判读结尾，直接书输出true/false');
}
{//例4--复制字符串
    console.log('4、复制字符串');
    console.log('呵呵哒、'.repeat(3)+'--使用repeat复制三次');
}