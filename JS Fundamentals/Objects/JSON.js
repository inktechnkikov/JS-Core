let obj = {
    name: "SoftUni",
    age:3,
};
let str = JSON.stringify(obj);
console.log(str);
let str1 = "{\"name\":\"Nakov\",\"age\":24}";
let obj1 = JSON.parse(str1);
console.log(obj1);
