//2、变量的解构赋值
{
    //数组的解构赋值
    console.log('数组的解构赋值');
    let [a,b,c]=[0,1,2];//=let a=0,b=1,c=2;
    console.log(a+'``'+b+'``'+c);

    //二维数组的解构赋值
    console.log('二维数组的解构赋值');
    let [x,[y,z]]=[0,[1,2]];
    console.log(x+'``'+y+'``'+z);

    //默认值数组的解构赋值
    console.log('默认值数组的解构赋值');
    let [f1,f2='12']=[1];//默认值写法
    console.log(f1+'``'+f2);

    //默认值数组的解构赋值--undefined
    //undefined相当于什么都没有，b是默认值。
    console.log('默认值数组的解构赋值--undefined');
    let [un1,un2='12']=['1',undefined];
    console.log(un1+'``'+un2);

    //默认值数组的解构赋值--null
    //null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
    console.log('默认值数组的解构赋值--null');
    let [null1,null2='12']=['1',null];
    console.log(null1+'``'+null2);

    //对象的解构赋值
    console.log('对象的解构赋值');
    let {oa,ob,oc}={oa:0,ob:1,oc:2};//=let a=0,b=1,c=2;
    console.log(oa+'``'+ob+'``'+oc);
    let od;//先赋值时，要在解构赋值外加括号
    ({od}={od:'呵呵哒'});

    //字符串的解构赋值
    console.log('字符串的解构赋值');
    const [a1,a2,a3]='呵呵哒';
    console.log(a1+'``'+a2+'``'+a3);
}