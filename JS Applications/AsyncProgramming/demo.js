console.log('Before Promise');
new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('done');
    },2000);
}).then(function (result) {
    console.log('Then returned ' + result);
});
console.log('After promise');