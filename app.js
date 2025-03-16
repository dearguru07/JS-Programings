// const data={
//     a:"red",
//     b:"green",
//     c:"yellow",
//     a:"pink"
// }
// console.log(data)

// spead opratior-------------------

// const arry1=[1,2,5,4,8,1,2,2]
// const op=[...new Set(arry1)]
// console.log(op)

// let n=3.458475
// let ans=n.toFixed(2)
// console.log(ans)

// const object={namee:"guru",2:"chanran",world:'hello'}
// object.data="mahi"
// delete object.world
// console.log(object)

// let array2=[1,2,5,'guru',4,'charan',6,'virat',7,'kohli']
// let strings=[]
// let nums=[]

// array2.forEach(element => {
//     if(typeof element==='string'){
//         strings.push(element)
//     }
//     else{
//         nums.push(element)
//     }
// });
// console.log(strings)
// console.log(nums)

// let array3=[4,5,8,2,9,7,6,1]
// let sum=0;
// for (let i=0;i<array3.length;i++){
//     sum+=array3[i]
// }
// console.log(sum);

// let string = "Hello world";
// let vowels = ["a", "e", "i", "o", "u"];
// let sol = [];
// for (let i = 0; i < string.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (string[i] === vowels[j]) {
//       sol.push(string[i]);
//       break;
//     }
//   }
// }
// console.log(sol);

// const arry=[1,5,7,5,2,6,8,2,3,5,1,6,8,6,7,1,4,7]
// const res=[]

// function removeDuplicates(arry){
//     for(let i=0;i<arry.length;i++){
//         if(!res.includes(arry[i])){
//             res.push(arry[i])
//         }
//     }
//     return res
// }
// const solustion=removeDuplicates(arry)
// console.log(solustion)

// var a=20
// function s(){
//   var d=50
// }
// console.log(a)
// console.log(s.d);

// let x = {
//   value: 1,valueOf: function () {
//     returnthis.value++;
//   },
// };
// if (x == 1 && x == 2 && x == 3) {
//   console.log("Hello..");
// }

// function a() {
//   c();
//   console.log(b);
//   function c() {
//     let b = 20;
//   }
// }
// a();

// let a =20
// var v=7;

const radius = [1, 2, 4, 5];


// const calculateCircufernce=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output;
// }
// console.log(calculateCircufernce(radius));

// const CalculateDiameter=function (radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }
// console.log(CalculateDiameter(radius));


const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));


const Area=function(radius){
    return 2*Math.PI*radius*radius
  }
  
  const Circufernce=function(radius){
    return 2*Math.PI*radius
  }
  
  const Daimater=function(radius){
    return 2*radius
  }
  const calculateArea = function (radius,logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log(calculateArea(radius,Area));
  console.log(calculateArea(radius,Circufernce));
  console.log(calculateArea(radius,Daimater));const Area=function(radius){
    return 2*Math.PI*radius*radius
  }
  
  const Circufernce=function(radius){
    return 2*Math.PI*radius
  }
  
  const Daimater=function(radius){
    return 2*radius
  }
  const calculateArea = function (radius,logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log(calculateArea(radius,Area));
  console.log(calculateArea(radius,Circufernce));
  console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
    return 2*Math.PI*radius*radius
  }
  
  const Circufernce=function(radius){
    return 2*Math.PI*radius
  }
  
  const Daimater=function(radius){
    return 2*radius
  }
  const calculateArea = function (radius,logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log(calculateArea(radius,Area));
  console.log(calculateArea(radius,Circufernce));
  console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));const Area=function(radius){
  return 2*Math.PI*radius*radius
}

const Circufernce=function(radius){
  return 2*Math.PI*radius
}

const Daimater=function(radius){
  return 2*radius
}
const calculateArea = function (radius,logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculateArea(radius,Area));
console.log(calculateArea(radius,Circufernce));
console.log(calculateArea(radius,Daimater));