{//例1-1-1  二进制声明
    console.log('例1-1-1  二进制声明');
    let binary=0B010101;
    console.log(binary)
}
{//例1-1-2  八进制声明
    console.log('例1-1-2  八进制声明');
    let octal=0O666;
    console.log(octal)
}

{//例2-1  数字验证Number.isFinite(xx)
    console.log('例2-1  数字验证Number.isFinite(xx)');
    let a=11/4;
    console.log(Number.isFinite(a));
    console.log(Number.isFinite('heheda'));
    console.log('NaN：'+Number.isFinite(NaN));
    console.log('undefined：'+Number.isFinite(undefined));
    console.log('null：'+Number.isFinite(null));
}
{//例2-2  NaN验证
    console.log('例2-2  NaN验证');
    console.log('NaN：'+Number.isNaN(NaN));
    console.log('呵呵哒：'+Number.isNaN('呵呵哒'));
}
{//例2-3  判断是否为整数Number.isInteger(xx)
    console.log('例2-3  判断是否为整数Number.isInteger(xx)');
    console.log('0'+Number.isFinite(0));
    console.log('1'+Number.isFinite(1));
    console.log('1.1'+Number.isInteger(1.1));
}
{//例2-4  整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
    console.log('例2-4  整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)');
    console.log('0'+Number.parseInt('0'));
    console.log('1.1整形转换：'+Number.parseInt('1.1'));
    console.log('1.1浮点型转换：'+Number.parseFloat('1.1'));
}

{//例3  整数取值范围操作
    console.log('例3  整数取值范围操作')
    let heheda=Math.pow(2,53)-1;
    console.log('整数取值范围最大值：'+heheda);
    console.log('整数取值范围最小值：'+-heheda);
}
{//例3-2  最大安全整数
    console.log('例3-2  最大安全整数')
    console.log('最大安全整数:'+Number.MAX_SAFE_INTEGER);
}
{//例3-3  最小安全整数
    console.log('例3-3  最小安全整数');
    console.log('最小安全整数:'+Number.MIN_SAFE_INTEGER);
}
{//例3-4  安全整数判断Number.isSafeInteger()
    console.log('例3-4  安全整数判断isSafeInteger()');
    console.log(Number.isSafeInteger(9007199254740992));
}