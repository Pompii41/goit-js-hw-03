"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
const userChanges = function (mood, hobby, premium) {
  user.mood = mood;
  user.hobby = hobby;
  user.premium = premium;
};

userChanges("happy", "skydiving", false);
console.table(user);
