// question no 1
function date_(){
var a = new Date()
document.write(a);
}
date_()

// question no 2

function two(){
    var c = prompt("Enter your first name")
    var h = prompt("Enter your last name")
    alert("hello " +  c + " " + h )
}
two();

// question no 3

function num (){
    var user1 = prompt("Enter the first number")
    var user2 = prompt("Enter the second number")
alert(user1+user2)
}
num();

// question no 5

function sq (x){
    return x * x
}
sq();

// quetion no 7 
function nh (){
var num = prompt("Enter a number")
for ( i =1 ; i<=num; i++){
    }
}
nh();
// function abc(a,b){

// alert(a+b)
// }
// abc(5,9);

// question no 6
function abc (){
    var a= parseInt(prompt("enter a number for factorial"))
    if (a<0){
        alert("errror")
    }else{
        var result = 1;
        for(var i=1; i<=a; i++){
            result*=i
        }
        alert(result)
    }
}
abc()
// question no 8
function hypotenuse (){
    var a = +prompt("enter base")
    var b = +prompt("enter per")
    function square(x){
    return x *x
    }
    var d = Math.sqrt(square(a) + square(b))
    alert(d)
}
hypotenuse();

// question no 4
function abc (){
    var g = prompt("enter a num")
    var t = prompt("enter a sec number")
    var f = prompt("enter operation + ,- , / , *")
    if (f==="+"){
        alert(g+t)
    }    else if (f=== "-"){
        alert(g-t)
    }  else if (f=== "*"){
        alert(g*t)
    }else if ( f=== "/"){
     if(t<0){
        alert("error : cant be divide by zero")
     }else{
        alert(g/t)
     }
    }
    }
    abc();
    