let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let sum = document.getElementById('sum');
let calc = document.getElementById('calc');

function calc1(){
    sum.innerText= parseInt(input1.value) + parseInt(input2.value);
}