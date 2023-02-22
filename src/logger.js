import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

import * as constant from './constants.js';

//Arrow fucition
const sum = (a,b) =>{
    return a + b;
  }
  
  console.log(sum(2,3));
  
  const logger = log => console.log(log);
  logger("BTS");
  
//   const course = {
//     name : "BTS",
//     getName: () => {
//       return this;
//     }
//   }
  
//   console.log(course.getName());
  
  const course2 = function(name,price){
    this.name = name;
    this.price = price;
  }
  
  const jsCourse2 = new course2("BTS",1000);
  console.log(jsCourse2);

  //ĐỊnh nghĩa key: value cho object
  //ĐỊnh nghĩa method cho object
  //ĐỊnh nghĩa key cho object dưới dạng

  var name = "Bùi Tuấn Sơn";
  var price = 1000;
  var conurse = {
    name,
    price,
    getName() {
        return name;
    }
  }

  console.log(conurse.getName());

  //Biến
  var fieldName = 'name';
  var fieldPrice = 'price';

  const fieldCourse = {
    [fieldName] : 'Bùi Tuấn Sơn',
    [fieldPrice] : 1000,
  };

  console.log(fieldCourse);
  export default course2;

  function logger3(a,b,...params){
    console.log(params);
  };

logger3(1,2,3,4,5);

//Toán tử rest
  function logger2({ name, price,...rest}){
    console.log(name);
    console.log(price);
    console.log(rest);
  };

  logger2({
    name : 'Javascrip',
    price : 1000,
    description : 'Description content',
  });

  function logger4([a,b]){
    console.log(a);
    console.log(b);
  };

  logger4([
    2,6
  ]);
  //Toán tử Spread

  var array1 = ['Bùi Tuấn Sơn','Đỗ Hải Nam','Chử Đức Dương'];

  var array2 = ['ReactJS', 'Dart'];

  //Nối array 1 và 2 thành 3

  var array3 = [...array1,...array2];

  console.log(array3);

  //Ghép 2 object
  var object1 = {
    name : 'Phú Đần',
  };

  var object2 = {
    price : 'Nam Béo',
  };

  var object3 = {
    ...object1,
    ...object2
  };

  var defaultConfig = {
    api : 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
  };

  console.log(object3);

  var testArray = [
    'Javascrip',
    'PHP',
    'Ruby',
    'React'
  ];

  function logger5(...rest){
    for(var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
  };

  logger5(...testArray);

  var testArray1 = [
    'Javascrip',
    'PHP',
    'Ruby',
    'React'
  ];

//   var a = testArray1[0];
//   var b = testArray1[1];
//   var c = testArray1[2];
var [a,b,c] = array1

  console.log(a,b,c);

  var [a,...rest] = testArray1;

console.log(rest);

var course = {
    name : 'Javascrip',
    price : 1000
};

var {name,price} = course;
console.log(name,price);


var course = {
    name : 'Javascrip',
    price : 1000,
    children : {
        name : 'ReactJS'
    }
};

var {name : parentName,children : { name : childrenName },description = 'abcc'} = course;
console.log(parentName,childrenName);
console.log(parentName,childrenName,description);

// function logger6(...params){
//     console.log(params);
// };

// console.log(logger6(1,2,3,4,5));




