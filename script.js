let display = document.querySelector('.display');
let right = document.querySelector('.right');
let toggle = document.getElementById('toggle');
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let calc = document.getElementById('calc');
let point = document.getElementById('point');
let deg = document.getElementById('deg');
let del = document.getElementById('del');
let trigos = document.querySelectorAll('.trigo');
let logs = document.querySelectorAll('.logs');
let history = document.getElementById('history');
let sqt = document.getElementById('sqrt');
let power = document.getElementById('sqr-pow');
let inv = document.getElementById('inv');
let epow = document.getElementById('e-pow');
let button = document.querySelectorAll('.btn');
let opbutton = document.querySelectorAll('.btn-op');
let twopow = document.getElementById('two-pow');
let cbrt = document.getElementById('cbrt');
toggle.addEventListener('click',()=>{
    display.classList.toggle('big-display');
    toggle.classList.toggle('btn-toggle');
    right.classList.toggle('right-btn')
})
trigos.forEach((trigo)=>{
    trigo.addEventListener('click',()=>{
        let btnvalue = trigo.textContent;
        if(btnvalue.includes('sin')){
            calc.value += 'sin(';
        }else if(btnvalue.includes('cos')){
            calc.value += 'cos(';
        }else{
            calc.value += 'tan(';
        }
    })
})
logs.forEach((log)=>{
    log.addEventListener('click',()=>{
        let btnvalue = log.textContent;
        if(btnvalue.includes('ln')){
            calc.value += 'ln(';
        }else{
            calc.value += 'log(';
        }
    })
})
power.addEventListener('click',()=>{
    calc.value += '^(';
})
sqt.addEventListener('click',()=>{
    calc.value += '√(';
})
epow.addEventListener('click',()=>{
    calc.value += 'e^(';
})
inv.addEventListener('click',()=>{
    calc.value += '1/';
})
twopow.addEventListener('click',()=>{
    calc.value += '2^(';
})
clear.addEventListener('click',()=>{
    calc.value = '';
})
cbrt.addEventListener('click',()=>{
    calc.value += 'cbrt(';
})
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let btnvalue = btn.textContent;
        if(calc.value == ''){
            calc.value = btnvalue;
        }else{
            calc.value += btnvalue;
        }
    })
})
del.addEventListener('click',()=>{
    let x = calc.value;
    let num;
    num = x.split('')
    num.pop();
    calc.value = num.join('');
})
point.addEventListener('click',()=>{
    calc.value += 0 + '.';
})
result.addEventListener('click',()=>{
    history.value = calc.value;
    if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
    {
        if(calc.value.includes("÷")){
            divide();
        }else if(calc.value.includes("×")){
            multiply();
        }else if(calc.value.includes("+")){
            add();
        }else if(calc.value.includes("-")){
            sub();
        }else if(calc.value.includes("sin")){
            if(deg.textContent == 'Rad'){
                calc.value += ')';
                sine();
            }else{
                calc.value += '°)';
                sine();
            }
        }else if(calc.value.includes("cos")){
            if(deg.textContent == 'Rad'){
                calc.value += ')';
                cosine();
            }else{
                calc.value += '°)';
                cosine();
            }
        }else if(calc.value.includes("tan")){
            if(deg.textContent == 'Rad'){
                calc.value += ')';
                tangent();
            }else{
                calc.value += '°)';
                tangent();
            }
        }else if(calc.value.includes("√")){
            sqrt();
        }else if(calc.value.includes("ln")){
            log();
        }else if(calc.value.includes("log")){
            log();
        }else if(calc.value.includes("1/")){
            inverse();
        }else if(calc.value.includes("e^")){
            epower();
        }else if(calc.value.includes("^(")){
            calc.value += ')';
            numpow();
        }else if(calc.value.includes("2^(")){
            twoexp();
        }else if (calc.value.includes("cbrt")){
            cuberoot();
        }else{
            evaluate();
        }
    }
})
deg.addEventListener('click',()=>{
    if(deg.textContent == 'Rad'){
        deg.innerText = 'Deg';
    }else{
        deg.innerText = 'Rad';
    }
})
opbutton.forEach((opbtn)=>{
    opbtn.addEventListener('click',()=>{
        let opvalue = opbtn.textContent;
        if(calc.value == "NaN" || calc.value == "Infinity" || calc.value == '' || calc.value == undefined){Err()}
        else{
            if(opvalue.includes("×")){
                calc.value += '*';
            }else if(opvalue.includes("÷")){
                calc.value += '/';
            }else{
                calc.value += opvalue;
            }
        }
    })
})