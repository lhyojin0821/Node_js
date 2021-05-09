var f = function(){
    console.log(1+2)
    console.log(3+4)
}

var a =[f];
a[0]();

var o = {'func': f}
o.func();