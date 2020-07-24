"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
const userChanges = function (obj, key, value) {
  obj[key] = value;
};

userChanges(user, "mood", "happy");
userChanges(user, "hobby", "skydiving");
userChanges(user, "premium", false);
console.table(user);
