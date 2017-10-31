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
//2、变量的解构赋值
{
    //数组的解构赋值
    let [a,b,c]=[0,1,2];//=let a=0,b=1,c=2;
    console.log(a+'``'+b+'``'+c);

    //二维数组的解构赋值
    let [x,[y,z]]=[0,[1,2]];
    console.log(x+'``'+y+'``'+z);

    //默认值数组的解构赋值
    let [f1,f2='12']=[1];//默认值写法
    console.log(f1+'``'+f2);

    //默认值数组的解构赋值--undefined
    //undefined相当于什么都没有，b是默认值。
    let [un1,un2='12']=['1',undefined];
    console.log(un1+'``'+un2);

    //默认值数组的解构赋值--null
    //null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
    let [null1,null2='12']=['1',null];
    console.log(null1+'``'+null2);

    //对象的解构赋值
    let{a,b,c}={a:0,b:1,c:2};//=let a=0,b=1,c=2;
    console.log(a+'``'+b+'``'+c);

}