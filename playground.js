function num(){
    return 10;
}
console.log(num());
var x = ()=>{
    return 10;
}
console.log(x());
let div = () =>  10;
console.log(div());
let sayName = ()=>"Md Ruhul amin";
console.log(sayName());
function passValue(n){
    return n;
}
console.log(passValue(122));
let pv = (n) => n*n;
console.log(pv(1222));

let tim = (a,b)=> a+b; // means return a+b;
console.log(tim(1,2));

var javascript = {
    name : 'javascript',
    library:['React','Angular','Vue'],
    printLibraries: function(){
        this.library.forEach((a)=>{
            console.log(`${this.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();
var software = {
    name :'Md Ruhul Amin',
    lang:['c','c++','javascript','c#'],
    printInfo:function(){
        console.log(this.name);
        this.lang.forEach((l)=>console.log(`${this.name} loves ${l}`));
    }
}
software.printInfo();

var bof = {
    name:'Bangladesh ordnance Factories',
    address:'shimultoli, bof',
    products:['machinegun','morter','rifel','ak47'],
    printInfo: function(){
        this.products.forEach((p)=>console.log(`${this.name} makes ${p}`))
    }
}

bof.printInfo();

var myClass = function(name,email,contact){
    this.name = name;
    this.email = email;
    this.contact = contact;
}

let xx = new myClass("ruhul amin","r@gmail.com","110022151");
console.log(xx.name);
var isTrue = ['12','22'];
if(isTrue)console.log("True");
else console.log("not true");
var age = 18;
var ageStatus = (age>=18)?"Adult":"Not Adult";
console.log(ageStatus);
var num = [1,2,3,4,5];
var ans = num.find((elem)=> elem > 3)
console.log(ans);
var myInf = [1,2,3,4,5,6];
var res = myInf.find((e)=> e >4 );
console.log(`${res} found`);

var myNumber = [1,2,3,4,5,6,7,8,9];

var ans = myNumber.findIndex((cval,index,arr)=>{
    return cval>6;
});

console.log("index is " + ans);

var roll = [11,222,3,4,55,2232,11];
var res = roll.filter((elem)=> elem>10);
console.log(res);

var sls = roll.slice(1,4);
console.log(sls);

var myNum = [1,2,3,4,5];
var inf = myNum.splice(1,1,111,222);
console.log(myNum);
console.log(inf);

var ar1 = [1,2,3,4];
var ar2 = [5,6,7];
var res = ar1.concat(ar2);
console.log(res);
ar2.push(12);
console.log(ar2);
var ar3 = [1,3,4,5,6,7];
console.log("MAP :=> ");
var myar = ar3.map((e)=>e*2);
console.log(myar);
var myInformation = {
    "name": "Md Ruhul Amin",
    "email"  : "ruhul@gmail.com",
    "contact" : "01322352864"
};
for(property in myInformation){
    console.log(`Info :  ${property}`);
}

var myObj = {
    name :"Ruhul Amin",
    email : "ruhul@gmail.com",
    contact : "01322352864"
};
var keys = Object.keys(myObj);
var vals = Object.values(myObj);
var entries = Object.entries(myObj);
console.log(keys);
console.log(vals);
console.log(entries);

function defaultFunction(x ="Md Ruhul Amin"){
    return x;
}
console.log(defaultFunction());

console.log(defaultFunction("Sakib Hasan"));

var xl = [1,2,3,4,5];
var xll = [...xl,11,1221];
console.log(xll);
var  p = [...xl]; // no change after push of xl
xl.push(12111);
var o1 = {
    name:'adns',
    email:'adns@gmail.com'
};
var o2 = {
    code : '1212',
    contact:'12221--12121'
};
var o3 = {
    ...o1,
    ...o2
};
console.log(o3);

function infoShow(){
    console.log(arguments);
}

infoShow(1,2,3,4,5);

console.log("Rest Operator :=>");
function myParams(...params){
    console.log(params);
}

myParams(1,2,3,4,5);
console.log("Object Distructuring");
var detail = {
    name:"Ruhul Amin",
    email : "ruhulamin.cs.dev@gmail.com",
    contact: "01322352864",
    education : {
        degree : "Master of Sience in CSE",
    }
};
const {name:name_info} = detail ;
console.log(name_info);
console.log(detail["email"]);
const {education:{degree: deg = {}}} = detail;
console.log(deg);

var a = 12,b = 36;
console.log(`I am ${a} and my friend is ${b}`);
console.log(`This 
        is good thing!`);