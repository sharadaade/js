// Singleton
// Object.create

// myArray = ["s","h","a"]
// Object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Sharad",
    "full name": "sharad aade",
    [mySym]: "key1",
    age:23,
    location: "Beed",
    email: "aadesharad@gmail.com",
    isLoggedIn: false,
    LastLogIn: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sharadaade.in@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "sharad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

