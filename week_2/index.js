//1-Explain the difference between primitive types and reference types in JavaScript.
/*
Primitive data that is not object and has no method    ex(boolean , string , bigint , number , undefined , symbol )
 Primitive data is immutable like if (let x ='asem' i can not change the first char to 'A');
 Primitive we can not change the value of variable by an other one like if we have variable a and assigned its value by the value of v (variable) (a=v) we can not change the value of v by the variable a)
 Reference like object ,function ,array
 Reference type is mutable
 copying : assigning an object to another var does not make a new object it just copies the reference

____________________________________________________________________________________________________________
*/
//2- Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.
/*
function declaration
function name() {
    return "asem";
}
console.log(name());
in hoisting
console.log(name());
function name() {
    return "asem";
}
output: asem
a part of code is copied before run to be
function name() {
    return "asem";
}
console.log(name());
function name() {
    return "asem";
}
Function expression
var x=function()  {
    return "asem";
}
console.log(x());

Function expression hoisting
console.log(x());
var x=function()  {
    return "asem";
}
this will be type error
x is not a function
because code will be
var x=undefined;
console.log(x());
var x=function()  {
    return "asem";
}
so x before the line of function is not a function
so it is undefined
if the code is
console.log(x);
var x=function()  {
    return "asem";
}
output will be undefined

____________________________________________________________________________________________________________
*/

// 3- Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
/*
pure function : is the function that gives the same output for the same input
and has no side effects does not change any thing out its scope
ex1
function add(a,b)
{return a+b;}
ex2
function inc(n)
{return ++n;}
________________________
not pure function because it depends on global variable
let x=0;
function inc()
{return ++x;}
____________________________________________________________________________________________________________
*/

//4- Write down the array methods that you have studied and classify them to destructive and not destructive.
/*
Destructive methods
push, pop, shift, unshift, splice, sort, reverse, fill
Not Destructive methods
concat, slice, map, filter, reduce, join, forEach, indexOf, lastIndexOf, includes
*/
//Practical

function createItem(Name ,Category,Price,Stock){
    return{
        name:Name|| "unknown name",
        category:Category||"unknown category",
        price:Price||-1,
        stock:Stock||0,
        updateStock : function (newStock){
            this.stock = newStock||0;
        },
        applyDiscount : function (discount){
            return this.price-this.price*(discount||0);
        }
    }

}
let inventory = {
    items:[],
    addItem:function(item){
        this.items.push(item);
    },
    removeItem:function(item){
        this.items.splice(this.items.indexOf(item), 1);
    },
    getItems:function(item){
        return this.items.includes(item);
    },
    filterItems: function (predicate) {
        if (predicate===undefined) {return 0;}
        return this.items.filter(predicate);
    }
}

let phone = createItem("phone", "Electronics", 10000, 10);
let headphone = createItem("headsets", "Electronics", 700, 5);
let sticker = createItem("sticker", "papers", 10, 1);
let smartWatch = createItem("watch", "Electronics", 4000, 7);
inventory.addItem(headphone);
inventory.addItem(phone);
inventory.addItem(smartWatch);
inventory.addItem(sticker);
inventory.filterItems();
phone.updateStock(9);
console.log(phone.applyDiscount(.2));
console.log(phone);
console.log(inventory.filterItems(
    function(item){
        return item.category ==="Electronics";
    }
));
console.log(inventory.filterItems(
    function(item){
        return item.stock<=7;
    }
));
inventory.removeItem(headphone);
console.log(inventory.items);






