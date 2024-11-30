let num,n1,n2,x;
let percent = document.getElementById('percent');
let fact = document.getElementById('fact');
let sqr = document.getElementById('sqr');
let cb = document.getElementById('cb');
function Err(){
    calc.value = 'Invalid Fomat Used';
    history.value = '';
    setTimeout(()=>{
        calc.value = '';
    },2000)
}
percent.addEventListener('click',()=>{
    let value = parseFloat((calc.value/100));
    if(value === NaN || value === undefined || value === null || value === ''){
        Err();
    }else{
        calc.value = value;
        history.value = calc.value;
    }
})
function divide() {
    x = calc.value;
    num =  x.split('÷');
    n1 = parseFloat(num[0]);
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = n1/n2;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function multiply() {
    x = calc.value;
    num =  x.split('×');
    n1 = parseFloat(num[0]);
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = n1*n2;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function add() {
    x = calc.value;
    num =  x.split('+');
    n1 = parseFloat(num[0]);
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = n1+n2;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function sub(){
    x = calc.value;
    num =  x.split('-');
    n1 = parseFloat(num[0]);
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = n1-n2;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function evaluate(){
    x = eval(calc.value);
    history.value = calc.value;
    calc.value = x;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function degcheck() {
    if(deg.innerText === 'Rad'){
        history.value = calc.value;
        if(calc.value.includes('sin')){
            calc.value = Math.sin(n1);
        }else if(calc.value.includes('cos')){
            calc.value = Math.cos(n1);
        }else{
            calc.value = Math.tan(n1);
        }
    }else{
        history.value = calc.value;
        if(calc.value.includes('sin')){
            calc.value = Math.sin((n1 * Math.PI)/180);
        }else if(calc.value.includes('cos')){
            calc.value = Math.cos((n1 * Math.PI)/180);
        }else{
            calc.value = Math.tan((n1 * Math.PI)/180);
        }
    }
}
function trigoval() {
    x = calc.value;
    num = x.slice(4);
    if(num.includes(')')){
        num = num.split(')');
    }else{
        num = num.split('°)');
    }
    n1 = parseFloat(num[0]);
}
function sine(){
    trigoval();
    degcheck();
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function cosine(){
    trigoval();
    degcheck();
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function tangent(){
    trigoval();
    degcheck();
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function sqrt(){
    x = calc.value;
    num = x.split('(');
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = Math.sqrt(n2);
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function recursion(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n * recursion(n-1);
    }
}
fact.addEventListener('click',()=>{
    if(calc.value == ''){
        Err();
    }else{
        calc.value += '!';
        x = calc.value;
        num = x.split('!');
        n1 = parseInt(num[0]);
        history.value = calc.value;
        calc.value = recursion(n1);
    }
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == undefined){Err()}
})
function log(){
    x = calc.value;
    num = x.split('(');
    n2 = parseFloat(num[1]);
    n2 = eval(n2);
    history.value = calc.value;
    if(calc.value.includes("ln")){
        calc.value = Math.log(n2);
    }else{
        calc.value = Math.log10(n2);
    }
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined || calc.value == '-Infinity'){Err()}
}
function inverse(){
    history.value = calc.value;
    calc.value = eval(calc.value);
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
function epower(){
    x = calc.value;
    num = x.split('(');
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    let temp = Math.E;
    calc.value = Math.pow(temp,n2);
}
sqr.addEventListener('click',()=>{
    if(calc.value == ''){
        Err();
    }else{
        calc.value += '^(2)';
        x = calc.value;
        num = x.split('^');
        n1 = parseFloat(num[0]);
        history.value = calc.value;
        calc.value = Math.pow(n1,2);
    }
})
function numpow(){
    x = calc.value;
    num = x.split('^(');
    n1 = parseFloat(num[0]);
    n2 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = Math.pow(n1,n2);
}
function twoexp(){
    x = calc.value;
    num = x.split('(');
    n1 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = Math(2,n1);
}
function cuberoot(){
    x = calc.value;
    num = x.split('(');
    n1 = parseFloat(num[1]);
    history.value = calc.value;
    calc.value = Math.cbrt(n1);
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
}
cb.addEventListener('click',()=>{
    if(calc.value == ''){
        Err();
    }else{
        calc.value += '^(3)';
        x = calc.value;
        num = x.split('^');
        n1 = parseFloat(num[0]);
        history.value = calc.value;
        calc.value = Math.pow(n1,3);
    }
})