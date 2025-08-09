console.log(Math.floor(5.5));
let name :any = "youss";
Math.round(name);
name = true;
// let arr4 : readonly string[] = ["touss"]; //cant change the array

// let arr1:number[] = [2,3,4,5,6,];
// let arr2 : string[] = ['a' ,'b' ,'c' ,'d'];
// let arr3 : (string | number | number[] )[] = [1,2,3,4, "ahmed" , [1,2,3]]; //nasted array

// function showDetails(num:number , name:String , age :number , salary:number) : string {
//     return `my name is ${name} iam ${age} years old,  my phone number is ${num} and my salary is ${salary}`
// }
//console.log(showDetails(1, "yousab" , 21 , 5000));

// function hello(age:number , name?:string ,adress?:string){
//    return `age is ${age} ${name} ${adress}` 
// }
// hello(1 );
type nums = 0|1|-1
function compare(num1: number , num2: number):nums {
    if (num1 ===num2){
        return 0
    }else if(num1>num2){
        return 1
    }else{
        return -1
    }
}
console.log(compare(20,20))
console.log(compare(21,20))
console.log(compare(2,20))

//refer to another enum
enum kids {
    five =25,
    seven = 20,
    ten = 10

}

//Enums
function num():number {
    return 3;
}
enum level{
    kid= kids.five, //refer to another enum
    easy=9,
    medium=6,
    hard=num() //momken ne7ot funtion
}


let lvl:string = "easy";
if(lvl =="easy"){
    console.log(`the level is ${lvl} and the second is ${level.easy}`);
}

//Assertion
// let data :any =1000
// console.log((data as string).repeat(3));

//union and intersections
type A= {
    one : string,
     two : number,
     three:boolean
}
type B = A&{ //akhad el 7aga beta3et A w zawed 3aleha
    four:number
}
type c ={
    five: boolean
}
type mix = A&c; //intersectoin
function getActoin(btns : mix){
console.log(`hello ${btns.one}`)
console.log(`hello ${btns.two}`)
console.log(`hello ${btns.three}`)
console.log(`hello ${btns.five}`)
}
getActoin({one:"string" , two:100 , three:true , five:false});
//another example on Enum
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car ={
    year : CarYear,
    type :CarType,
    model : CarModel
}
const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const car :Car= {
    year : carYear,
    type : carType,
    model : carModel
} 


//interface
interface Rectangle{
    userName : string
    height : number,
    width : number , 
    hello() :string //add functoin to interface
}
const rectangle : Rectangle ={
    userName : "mohamed",
    height: 0,
    width: 0,
    hello(  ) {
        return `hello ${rectangle.userName}`   
    }
};
function getProperties(data : Rectangle) : void{    //data of type rectangle
    console.log (`height is ${data.height}`);
    console.log(`the widhth is ${data.width}`);
}
getProperties ({ userName:"mohamed",
     height : 100 ,
      width : 30 ,
       hello : function(){
        return ""
       } });      //remember curly praces  ( { } )


//extends an interface
interface ColoredRectangle extends Rectangle {
    color : string,
     userName : string ,
      hello() :string 
}
const coloredOne : ColoredRectangle ={  // lazem a3raf kol el properties
    height: 0,
    width : 20,
    color : "red",
     userName : " " ,
      hello() {
        return " "
      }
}

//union types
type x = string|number | boolean;
let ana : x ="ahmed";
let hwa : x =20;
let hya : x = true;

//casting (as) or < >
let x : any = 1000
console.log ((<string>x).length);

//type annotation with objects
let myObject : {
    userName : string, 
    id : number,
    email:string ,
    hire ?: boolean    //optional ( ? ) w maktebhash ta7t ba2a 3adi
    skills : {        //nasted object
        one : string,
        two : string
    }
}= {
    userName : "yous",
    id : 22314,
    email : "yousab.mounir@gmaili.com",

    skills : {         //nasted object
        one : "html",
        two : "css"
    }
}
//can change the attributes
myObject .userName = "ahmed";
console.log(myObject.userName);
console.log("helloo world");

//calsses
 class person{
    static created : number = 0;
    private userName: string;
    private  id : number;
    private salary:number;
    private  active: boolean;
    public constructor (userName: string , id : number , salary : number , active : boolean){
        this.userName = userName;
        this.id = id;
        this.salary = salary;
        this.active = active;
        person.created++;
    }
    public getCreated(){
        console.log(`the number of created object is ${person.created}`)
    }
    public getName (){
        return this.userName;
    }
    public getId(){
        return this.id;
    }
    public getSalary(){
        return this.salary;
    }
    public msg(){
        return console.log(`hello ${this.getName}`)
    }

}
let user = new person("youss" , 234 , 5000 , true);
let user1 = new person("youss" , 234 , 5000 , true);
let user2 = new person("youss" , 234 , 5000 , true);
let user3= new person("youss" , 234 , 5000 , true);
console.log(user.getCreated());

//class implements interface
interface settings {
    theme : Boolean,
    movable() : void
}
class Web implements settings {
    public theme : boolean = false;
    public constructor (theme: boolean , ){
        this.theme =theme;
    }
    // public movable (){
    //     console.log("i can move");
    // }
    movable(): void {
        console.log("we can move")
    }
}


// Abstract class
abstract class food{
    title : string
    constructor(title:string){
        this.title =title;
    }
    abstract getCookingTime():void;
}
class pizza extends food {
    kind:string
    constructor(kind:string){
        super("pizza")
        this.kind = kind;
    }
    getCookingTime(): void {
        console.log("cooking time is 1 hour")
    }
}
class burger extends food {
    kind : string 
    constructor (kind :string){
        super ("burger")
        this.kind = kind;
    }
    getCookingTime(): void {
        console.log ("the cooking time for pizza is 2 hours");
    }
}
let piz = new pizza("pizza")

//Generics
function returnType < T>(thing : T) : T{
    return thing
}
console.log(returnType <number>(100));
console.log(returnType <string>("sgsg"));
console.log(returnType <boolean>(true));

function multipleTypes <T , s > (value1 : T , value2 : s):string{
    return `the fist value is ${value1} and the second value is ${value2}`
}
console.log(multipleTypes (1000 , false));
console.log(multipleTypes <string , boolean>("ahmed" , false));  //msh lazem akteb  dii <string , boolean>
  class user5 <T> {
    value :T; //generic class
    constructor(value : T){
        this.value = value;
    }
  }
  interface book{
    type : string;
    title : string;
    isbn : number
  }
  interface game {
     type : string;
    style : string;
    price : number
  }
  
  class collections<T>{
    data : T[] = []
    add(item : T){
        this.data.push(item);
    }
  }

  let item1 = new collections <book>()
  item1.add({type :"drama" ,title : "ana" ,isbn: 21313});
  
  let item2 = new collections<game>()
  item2.add ({type:"sgsag" , style:"sgsgsa" , price:121313})
  


