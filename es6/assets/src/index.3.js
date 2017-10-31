{ //例1、对象扩展运算符
    console.log('对象扩展运算符');
    function heheda(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[4]);
    }
    heheda(1,2,3,4);
}
{ //例2、扩展运算符的用处
    console.log('扩展运算符的用处-1')
    let arr1=['www','heheda','com'];
    let arr2=arr1;
    console.log(arr2);
    arr2.push('nihao');
    console.log(arr1);

    console.log('扩展运算符的用处-2')
    let arr3=['www','heheda','com'];
    let arr4=[...arr3];
    console.log(arr4);
    arr2.push('nihao');
    console.log(arr3);

}
{ //例3、rest运算符
    console.log('rest运算符');
    function restfun(first,...arg){
        console.log(first);
        console.log(arg.length);
        for(let val of arg){
            console.log(val);
        }
    }
    restfun(1,2,3,4,5,6);
}