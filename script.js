"use strict";
//#region task1

// let user1 = {
//   fullname: "Nicat Novruzzade",
//   age: 21,
// }

// let user2 = {
//   fullname: "Fatime Bayramova",
//   age: 20,
// }

// let user3 = {
//   fullname: "Murad Ceferov",
//   age: 15,
// }

// let users = [user1, user2, user3];

// const myCallBack = (age) => {
//   if (age < 18) {
//     return true;
//   }
//   return false;
// }

// function ageDetector(arr, callback) {
//   for (const user of users) {
//     if (myCallBack(user.age) == true) {
//       console.log("Userin yashi catmir");
//     } else {
//       console.log(register(user));
//     }
//   }
// }

// function register(user) {
//   return `name: ${user.fullname}\nage: ${user.age}\nSuccesfully registered\n\n`;
// }




// ageDetector(users, myCallBack);


//#endregion
//#region task2

// let user1 = {
//   name: "Nicat",
//   age: 15,
// }

// let user2 = {
//   name: "Fatime",
//   age: 20,
// }

// let user3 = {
//   name: "Murad",
//   age: 19,
// }

// let users = [user1, user2, user3];

// function toUpper(user) {
//   return user.name.toUpperCase();
// }

// function ageDetector (user) {
//   if (user.age >= 18) {
//     return user.age;
//   }else {
//     user.age = 18;
//     return user.age;
//   }
// }

// function userChecker(arr, callback1, callback2) {
//   for (const user of arr) {
//     user.name = callback1(user);

//     console.log (`name: ${user.name}\nage: ${callback2(user)}`);
//   }
// }


// userChecker(users, toUpper, ageDetector);



//#endregion




let name = "kkkkttttyyyttttuuuusssuuu";

let count = 0;

let arr = [];

// let result = name.replaceAll("t", " ");

// console.log(result);


for (let i = 0; i < name.length; i++) {

  if (name[i - 1] != name[i]) {


    count = name.replaceAll(name[i], " ").split(" ").length - 1;


    if (arr.includes(`${name[i]} count : ${count}`)) {
    } else {
      arr.push(`${name[i]} count : ${count}`)
    }



    count = 0;

  }

}

for (const item of arr) {
  console.log(item);
}

