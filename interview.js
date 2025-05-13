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


const numbers=[1,2,5,4,87,5,2,8,2,4,8,2,1,4,5,2,1,4,5,99]

const values=()=>{
    const res=[]
    for(let i=0;i<numbers.length;i++){
        if(!res.includes(numbers[i])){
            res.push(numbers[i])
        }
    }
    return res
}
console.log(values(numbers))