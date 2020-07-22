"use strict";
const findBestEmployee = function (employees) {
  const arrValues = Object.values(employees);
  const arrEmployee = Object.keys(employees);
  console.log(arrValues);

  let total = 0;
  let index;
  for (let i = 0; i < arrValues.length; i += 1) {
    if (arrValues[i] > total) {
      total = arrValues[i];
      index = i;
    }
  }
  return ` ${arrEmployee[index]}:${total} `;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
