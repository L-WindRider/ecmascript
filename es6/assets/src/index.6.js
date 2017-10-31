{ //例1 JSON数组格式转换
    console.log('例1 JSON数组格式转换');
    let json={
        '0':'heheda0',
        '1':'heheda1',
        '2':'heheda2',
        length:3
    }
    console.log(json);
   let arr=Array.from(json);
    console.log(arr);
}
{ //例2 Array.of()方法
    console.log('例2 Array.of()方法');
    let arr1=Array.of(1,2,3,4,5,6)
    console.log(arr1);
}
{ //例3 find()实例方法
    console.log('例3 find()实例方法');
    let arr1=[1,2,3,4,5,6];
    console.log(arr1);
    console.log('数字对比查找：'+arr1.find(function(value,index,arr){ 
        return value>1;
    }));
    let arr2=['heheda1','heheda2'];
    console.log(arr2);
    console.log('字符串查找：'+arr2.find(function(value,index,arr){
        return value='qweee';
    }));
    let arr3=[1,2,3,4,5,6];
    console.log(arr3.find(function(value,index,arr){
        return value=6;
    }));
}
{ //例4 fill()实例方法
    //它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置.
    //当只有两个参数时，会从参数参数开始处替换到结束，当只有一个参数时，会全部替换
    console.log('例4 fill()实例方法');
    let arr=[1,2,3,4,5,6];
    console.log(arr);
    arr.fill('三个参数',1,3);
    console.log(arr);
    arr.fill('两个参数',2);
    console.log(arr);
    arr.fill('一个参数');
    console.log(arr);
}
{ //例5-1 for…of循环
    console.log('例5-1 for…of循环');
    let arr=[1,2,3,4,5,6];
    for(let item of arr){
        console.log(item);
    }
}
{ //例5-2 for…of数组索引
    console.log('例5-2 for…of数组索引');
    let arr=[1,2,3,4,5,6];
    for(let item of arr.keys()){
        console.log(item);
    }
}
{ //例5-3 同时输出数组的内容和索引
    console.log('例5-3 同时输出数组的内容和索引');
    let arr=[1,2,3,4,5,6];
    for(let item of arr.entries()){
        console.log(item);
    }
    for(let [index,value] of arr.entries()){
        console.log('索引：'+index+' 值：'+value);
    }
}
{ //例5-4 entries()实例方法
    console.log('例5-4 entries()实例方法');
    let arr=[1,2,3,4,5,6];
    let list=arr.entries();
    console.log(list);
    console.log('---------------');
    console.log(list.next().value);//手动循环
    console.log('---------------');
    console.log(list.next().value);//手动循环

}