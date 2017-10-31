//1、声明方式
{
    //var：它是variable的简写，可以理解成变量的意思。
    for (var index = 0; index < 10; index++) {
        console.log("循环中" + index);
    }
    console.log("循环外" + index);

    //let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
    for (let i = 0; i < 10; i++) {
        console.log("循环中" + i);
    }
   // console.log("循环外" + i);//报错，为不影响下面，先注释

    //const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。
    const a = "heheda";
}