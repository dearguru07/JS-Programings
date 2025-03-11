// const data={
//     a:"red",
//     b:"green",
//     c:"yellow",
//     a:"pink"
// }
// console.log(data)


// let data={
//     a:"red",
//     b:"green",
//     c:"yellow",
//     a:"pink"
// }
// console.log(data)



// var data={
//     a:"red",
//     b:"green",
//     c:"yellow",
//     a:"pink"
// }
// console.log(data)


// const arry=[1,2,5,4,8,1,2,2]
// const op=[...new Set(arry)]
// console.log(op)

// spead opratior-------------------
// console.log(name)
// var name=254




// let nonZeros=[]
// let zeros=[]

// for(let i=0;i<nums.length;i++){
//     if(nums[i]!=0){
//         nonZeros.push(nums[i])
//     }
//     else{
//         zeros.push(nums[i])
//     }
// }
// const res=[...nonZeros,zeros]
// console.log(res)


// const nonZeros=nums.filter((x)=>x!=0)
// const Zeros=nums.filter((x)=>x==0)
// const res=[...nonZeros,Zeros]
// console.log(res)


// while (nums.length>0){
// nums.pop()
// }
// console.log(nums)


// nums.filter((x)=>x)
// // console.log(nums)

// while (nums!=0){
//     nums.pop()
// }
// console.log(nums)


// let n=3.458475
// let res=n.toFixed(2)
// console.log(res)


// let obj={...nums}
// console.log(obj)


// var newAett=new Aett(7).fill('4')
// console.log(newAett)



// var x=10
// var x=25
// console.log(x)

// let z=10
// z=48
// console.log(z)



// console.log('line 1 is print')
// // setInterval((x)=>{
// //     console.log('line 2 is print')

// // },3000)
// console.log('line 3 is print')
// console.log('line 4 is print')
// console.log('line 5 is print')


// const obj={namee:"guru",2:"chanran",world:'hello'}
// obj.data="mahi"
// delete obj.world
// console.log(obj)


const arry=[1,5,7,5,2,6,8,2,3,5,1,6,8,6,7,1,4,7]
const res=[]

function removeDuplicates(arry){
    for(let i=0;i<arry.length;i++){
        if(!res.includes(arry[i])){
            res.push(arry[i])
        }
    }
    return res
}
const solustion=removeDuplicates(arry)
console.log(solustion)