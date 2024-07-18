// const tinderUser = new Object() -> singlton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    emial: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

// combining the objects like arrays

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1,obj2 }
// const obj3 = Object.assign({},obj1,obj2,obj4) // will be udes very very less

const obj3 = {...obj1,...obj2} // 90% of the time we will use this 
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // important you took all the keys 
// and output is it is array now you can do anything with it
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
