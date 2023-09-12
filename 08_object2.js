//  Object Part-||

const tinderUser = new Object()

// const Tinder = {}
tinderUser.id = "123abc"
tinderUser.name = "Sharad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Tinder);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "sharad",
            lastname: "aade"
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1 , obj2 }
const obj3 = Object.assign( {}, obj1, obj2)
// console.log(obj3);






