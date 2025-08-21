/*1- == compare between values only
=== compare between values and datatype
2- because array is constant and he can not change it
the solution is make const -> let*/
//3-
let c = 1,
    f = 9/5*c+32;
console.log(f);
//4-
let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]==="string")console.log(arr[i][0].toUpperCase()+arr[i].substring(1).toLowerCase());
    else arr[i]*=3,console.log(arr[i]);
}
//5-
let s = "Hey There, I'm glad to have you";

let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
    let c = s[i];
    if ("aeiou".includes(c.toLowerCase())) {
        rev += c.toUpperCase();
    } else {
        rev += c;
    }
}

console.log(rev);

//6-
let text = "Please",ans="";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
let x=[];
mainloop:for (let i = 0; i < text.length; i++) {
    for(let j = 0; j < forbiddenLetters.length; ++j) {
        if(text[i].toLowerCase()==forbiddenLetters[j].toLowerCase())continue mainloop;
    }
    x.push(text[i]);
}
console.log(x.join("-"));