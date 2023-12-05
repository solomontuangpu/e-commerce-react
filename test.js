// function factorial(n) {
//     let result = 1;
//     for(let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     console.log("computed")
//     return result;
// }

// function memonize(fn) {
//     let cache = {};
//     return function(x){
//         if(cache[x]){
//     console.log(cache);

//             return cache[x];
//         }else{
//             cache[x] = fn(x);
//     console.log(cache);

//             return cache[x];
//         }
//     }
// }

// const memoiFactorial = memonize(factorial)

// console.log(memoiFactorial(5));
// console.log(memoiFactorial(5));

// const range = (start, stop) => new Array(stop - start)
//                                 .fill(0)
//                                 .map((v, i) => start + i);
// let oneToFour = range(1,5);

// console.log(oneToFour);

// const data = {
//     value: []
// }

// data.value.push(10)

// console.log(data.value);

const f = x => x + 9;
const g = x => x * 3;

const pipe = (...args) => {
    return function(x) {
        return g(f(x));
    }
}

const result = pipe(f, g)

//console.log(result);

const arr = [
    {id: 1, name: "John"},
    {id: 2, name: "Paul"},
    3,
    4,
    5
]

const newArr = arr.filter(el => el.id !== 1)

console.log(newArr)