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





