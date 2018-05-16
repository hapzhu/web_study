var c;
function nan1() {
    alert(1-'a');//字符串会自动转换成数值,非数值的字符串会转换成NaN
}
function nan2() {
    alert(NaN === NaN);//NaN是唯一一个不等于自身的值
}
function nan3() {
    alert(1 + NaN);//NaN与任何值进行运算结果都是NaN
}
function nan4() {
    alert(2 * NaN);
}
function nan5() {
    alert(NaN / NaN);
}
//isNaN函数只对数值有效,其它值会先转为数值再进行判断
function isNan1(c) {
    //空对象转为数值为NaN
//空数组可转为数值
    alert(isNaN(c));
}


//特殊数值Infinity
function infinity1() {
    alert(1/0);
}
function infinity2() {
    alert(1 / -0);
}
function infinity3() {
    alert(Infinity > NaN);
}
function infinity4() {
    alert(Infinity < NaN);
}
function infinity5() {
    alert(-Infinity > NaN);
}
function infinity6() {
    alert(-Infinity > NaN);
}
function infinity7(c) {
    alert(Infinity * c);
}
function infinity8(c) {
    alert(c / Infinity );
}
function infinity9(c) {
    alert(Infinity / c);
}
function infinityAdd(c) {
    alert(Infinity + c);
}
function infinitySub(c) {
    alert(Infinity - c);
}
function infinityMul(c) {
    alert(Infinity * c);
}
function infinityDiv(c) {
    alert( c/Infinity );
}

function isfinite(c) {
    alert( isFinite(c));
}