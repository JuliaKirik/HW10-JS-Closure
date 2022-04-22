function sum(x) {
    return function (y) {
        return x + y
    } 
}
const sum1 = sum(1);
console.log(sum1(2)); // результат выполнения 3
console.log(sum(1)(2)); // результат выполнения 3
    
//помилка в тому, що була змінна через var, а потрібно було через блочний let, а щоб виводило від 1 до 10, а не від 0 до 9, треба написати в консоль i + 1.

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i + 1);
    }, 0);
}

