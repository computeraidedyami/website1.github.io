/*
var x;
x = "Fucker";
var y;
y = "Motherfucker"

newFunction();
function newFunction() {
    alert("This is an alert");
}
*/
/*
var a = 10;
var b = 20;

    var result = a + b;
    document.write("This is the result of a and b:",result)
*/
/*
var a = 1000 + 3 * 20;

if (a <= 210) {

    console.log("This is an Xfactor message");
}

else {
    console.log("second coming of christ");
}
*//*
//Aqui parece ser  que se toma  solo el valor y no el tipo
var x = "10";
if (x == 20) {
    alert("this is an alert");
}


else {
    alert("this is alert 2")
}
*/
/*
var a = 5;
var b = (a + 2);
var c = (a + b);
{ document.write("este es el resultado", b," ", c); }
*/
/*
function area(w, h) {
    var area = w * h;
    document.write(area);
}

area(5, 6);

*/
// Switch command  about aguacantens
/*
var fruit = "aguacaten";
switch(fruit){
    case "apple":
    document.write("apple is 25 dollars");
    break;
    case "banana":
    document.write("the banana is 600 dollars");
    default:
    document.write("Esta fruta no existe, I'sorry");
}
*/
// While loop
/*
var count = 0;
while(count<10){
    document.write("hello world");

    count++;
}
*/
// Do  While
/*
var text = '';
var i = 0;

do{
    text += '</br> The number is'+' '+ i;
    i++;
    }
    while (i < 10) {
    document.write(text)}
    */
/*
function Myfunction (numero1,numero2){

    var Myfunction = numero1 +numero2;

    document.write(Myfunction);
}

Myfunction(1,3);
*/
/*
var x = 5;
var x = 6;


function suma(a, b) {
    document.write(a + b);
}
suma(5, 4);


var myName = 'Israel';
var myLastName = 'Juarez';
var myFullName = myName +' '+ myLastName;
alert(myFullName);

'this is a string';
'this is a second string';
alert('this is a string');

//ELSE IF
var ageAsString = prompt('Cual es tu edad?', 'Insertar edad aqui');
var age = Number(ageAsString);
if (age < 40) {
    alert('Eres muy joven');
}
else if (age == 40) {
    alert('Estas en el punto exacto');
}
else {
    alert('Estas, semiruco');
}

var age = Number(promt('Cual es tu edad', 'insertar edad aqui'))
var string = '';
while(age > 0);
{
    string += 'feliz cumpleanios'
}
// ARRAYS

var notSoEmpty = [];
notSoEmpty[0] = 1;
notSoEmpty[1] = 2;
alert(notSoEmpty);

var primes = [1,2,3,5,7,11];
var thirdPrime = primes[3];
alert(thirdPrime);

var myArray = [1, 'hello',false];
var truth = myArray[2];
alert(truth);

function range(max){
    var retVal = [];
    for ( var i = 0;i < max; i++)
    {
        retVal[i] = i*2;
    }
    return retVal;
}
alert(range(5));

var ageAsString = prompt("What is your age?","");
var age = Number(ageAsString);
if (age < 40) {
    alert("Oh youre so young...");
} else {
    alert("Oh youre so old");
}


function add(x, y) {
    var z = x + y;
    alert(z);
    return z;
}
add(5 ,7);
function add(x, y) {
    var z = x + y;
    return z;
}
var a = add(5 ,7);
console.log('document',a);
function cToF(x)
{
    var cToFahr = c * 9 / 5 + 32;
    var c = x;
    var message = c +'\xB0C is ' + cToFahr + ' \xB0F.';
    alert(message);
}

function fToC(fahrenheit)
{
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);

var scope = 'globalmente';
function probarscope(){
    var scope = 'local';
    function Intrascope(){
        return scope;
    }
    return Intrascope();
}
var x = probarscope();
console.log(x);
 */

/*
var counter = 0;
function add() {
    counter += 1;
}
add();
add();
add();

var scope = 'globalmente';
function probarscope(){
    var scope = 'local';
    function Intrascope(){
        var scope = 'lokalin';
        function Intra2(){
            scope = 'lokalinDonas';
            return scope;
        }
        return Intra2();
    }
    return Intrascope;
}
console.log(scope);

var x = probarscope();
console.log(x);
console.log(x());
var y = 2;
var x = function(){
    console.log(y);
    var y = 1 ;
}
alert(x());

var a = 1;

function b() {
    a = 10;
    return;

    function a() {}

}

b();
console.log(b);
alert(a);
*/
/*
var a = 1;

function b() {
  console.log('En : function b()');

    console.log('Imprime (a) en function b: ', a);
    // Mando a = function a() {}
    // Por Cuaaa?
    // Al momento de hacer el hoisting
    // (a) pasa a ser Global por no tener (var)
    // pero al final encuentra (a) en forma de funcion entones a = function a(){ } para function b
    a = 10;
    return;

    function a() {}

    // Despues del hoisting
    // a que la tiene en memoria como funcion ahora le asigna valor de = 10 ..
    // a = 10..
    // y al momento de mandar a imprimir ( a )  antes y despues de la funcion
    // Sera siempre : 1
}
console.log('(a) antes de ejecutar la funcion: ' + a);
b();
console.log('(a) despues de ejecutar la funcion..: ' + a);
console.log('================================================================================')
console.log('MISMO CASO PERO Sin Funcion a() {} en funcition b')
console.log('================================================================================')


var a2 = 1;

function b2() {
  console.log('En : function b()');

    console.log('Imprime (a) en function b: ', a2);
    // Mando a = 1
    // Por Cuaaa?
    // Al momento de hacer el hoisting
    // (a) pasa a ser Global por no tener (var)
    a2 = 10;
    return;

    // Despues del hoisting
    // (a) no la encontro en function b entonces paso a ser GLOBAL y (a) global = 1
    // a = 1
    // y al momento de mandar a imprimir ( a )  antes y despues de la funcion
    // Sera siempre : 1 y 10.. pues en funcion b --- a  que es global se le asigno valor 10..
}
console.log('(a) antes de ejecutar la funcion: ' + a2);
b2();
console.log('(a) despues de ejecutar la funcion..: ' + a2);
*/
/*
var passed = 3;
var addTo = function () {
    var inner = 2;
    return passed + inner;
};

var passed = 4;
console.log(addTo());
*/
/*
function b() {
    console.log(myVar);

}
function a() {
    var myVar = 2;
    b();
}
var myVar = 1;
a();
*/
/*
console.log(person);
console.log(carName);
console.log(price);
var person = 'John Doe';
carName = 'Volvo';
price = 200;

console.log(person);
console.log(carName);
console.log(price);
*/
/*
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x
console.log(typeof "3.14");
*/

/* scope = 'global';
function testScope() e{
    scope = 'local        fsdfsafsf    fds af ads f as fsad f s f dsa f   fd sf sd f ';
    function innerFunc() {
        return scope;
    }
    return innerFunc;
}
const y = testScope();
const x = y();
const answer = x;
console.log(answer); */

// ARRAYS 2
/*
var empty = [];
empty[0] = 1;
empty[1] = 2;
alert(empty);

var primes = [1,2,3,5,7,11];
var thirdPrime = primes[2];
alert(thirdPrime);

var myArray = [1, 'hello', false];
var truth = myArray[2];
//alert(truth);
var myArrayLength = myArray.length;
alert(myArrayLength);

*/
