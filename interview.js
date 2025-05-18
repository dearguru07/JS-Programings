// const arr = [1, 2, 5, 4, 5, 8, 5, 7, 5, 1, 2, 5, 8, 69];
// const removeDuplicates = (arr) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// console.log(removeDuplicates(arr));

// const arr1 = [1, 2, 5, 4, 5, 8, 5, 7, 5, 1, 2, 5, 8, 69];

// function removeDuplicate(arr){
//     let result=[]
//     for(let i=0;i<arr1.length;i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(removeDuplicate(arr1))

// const numbers=[1,2,5,4,87,5,2,8,2,4,8,2,1,4,5,2,1,4,5,99]

// const values=()=>{
//     const res=[]
//     for(let i=0;i<numbers.length;i++){
//         if(!res.includes(numbers[i])){
//             res.push(numbers[i])
//         }
//     }
//     return res
// }
// console.log(values(numbers))

// const Factorial=(n)=>{
//     if(n===0||n===1){
//         return 1;
//     }
//     return n*Factorial(n-1)
// }
// console.log(Factorial(5))

// function Factorial(n){
//     let res=1;
//     for (let i=2;i<=n;i++){
//         res*=i;
//     }
//     return res;
// }
// console.log(Factorial(5))

// const Fibnocci=(n)=>{
//     if(n<=1){
//         return n;
//     }
//     else{
//         return Fibnocci(n-1)+Fibnocci(n-2)
//     }
// }
// console.log(Fibnocci(10))

// const Fib=(n)=>{
//     let fib=[0,1]
//     for(let i=2;i<=n;i++){
//         fib.push(fib[i-1]+fib[i-2])
//     }
//     return fib
// }
// console.log(Fib(10))

// let furu=[2,5,4,7,5]
// if(furu.has(2)) true;

// let nums=[0,1,2,3,4,5,6,7,8,9,10]
// nums.splice(1,3,'guru')
// let res=nums.slice(5)
// console.log(nums)
// console.log(res)



// for Of for Arrys--------

// let names = ["Guru", "Charan", "Mahesh", "Ram", "Venky", "Mark"];
// for (let i of names) {
//   console.log(i);
// }




// for In for Objects--------


let namesSrtL = {
  G: "Guru",
  C: "Charan",
  M: "Mahesh",
  R: "Ram",
  V: "Venky",
  M: "Mark",
};


for (let i in namesSrtL) {
  // console.log(namesSrtL[i]);
  console.log(`${i} and ${namesSrtL[i]}`);
};


for (let i in namesSrtL) {
  // console.log(namesSrtL[i]);
  console.log(`${i} and ${namesSrtL[i]}`);
};

for (let i in namesSrtL) {
  // console.log(namesSrtL[i]);
  console.log(`${i} and ${namesSrtL[i]}`);
};
