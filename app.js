// lab1
// class Calculator {
//   constructor(_number = 0) {
//     this.number = _number
//   }
//   add(num) {
//     this.number += num
//     return this
//   }
//   sub(num) {
//     this.number -= num
//     return this
//   }
//   multi(num) {
//     this.number *= num
//     return this
//   }
//   divide(num) {
//     this.number /= num
//     return this
//   }
// }

// let result = new Calculator(20)
// // console.log(result)
// console.log(result.add(5))
// console.log(result.multi(10))

// lab 2
// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calPrice() {
//     let sumPrice = this.amount* this.price
//     return console.log(`Product:${this.name} price:${sumPrice}`)
    
//   }
// }

// class Beverage extends Sale {
//  constructor(_name,_amount, _price) {
//    super(_name,_amount, _price)
//  }
// }


// lab1
// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let keys = Object.values(salaries)
// console.log(keys)
// let newSalaries = keys.reduce((acc,curr)=> {
//   return acc += curr
// },0)
// console.log(newSalaries)

// // lab2
// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 
// const myEmptyObj = {key:"value",
//     key2:"value2"
// };

// // Works best with new browsers
// function checkEmptyObj(Obj){
// if(Object.keys(Obj).length === 0)
// {console.log("it's empty")}
// else{console.log("it's not empty")}
// }

// checkEmptyObj(myEmptyObj)




// // lab1
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// let calMulti = (...nums) => {
//   let sum = 1
//   for(let num of nums) {
//     sum *= num
//   }
//   return sum
// }
// let result = calMulti(1,2,3,4,5,6)
// console.log(result)

// lab2
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่่
// let filterOutOdds = (...nums) => {
//      let oddNum = nums.filter((item)=> {
//        return item % 2 == 0
//      })
//      return oddNum
// }

// let result = filterOutOdds(2,4,5,6,8,22)
// console.log(result)


// lab3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObj = (...obj) => {
//   let empty = {}
//   for (let i = 0; i<obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname:'Nattapong',
//   lname: 'Nakcharin'
// }
// let obj2 = {
//   nickName: 'Faris'
// }

// let obj3 = mergeObj(obj1, obj2)
// console.log(obj3)

// 3.1
// let mergeObj = (...obj) => {
//   return Object.assign({},...obj)
// }
// let obj1 = {
//   fname:'Nattapong',
//   lname: 'Nakcharin'
// }
// let obj2 = {
//   nickName: 'Faris'
// }

// let obj3 = mergeObj(obj1, obj2)
// console.log(obj3)



// lab4
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// const nums3 = [5,...nums1,-6,-1,...nums2]
// console.log(nums3)


// lab5

// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let arrconverter = (array1)=> {
//     array2 = [...array1]
//     array2[3] = array2[3]**2
//     return array2
// }
//  array1 = [1,2,3,4,5,8]
//  let result = arrconverter(array1)
//  console.log(result)

// lab6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้
//  แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter
// let profile = (fname,lname,...hobby)=> {
//     console.log(`${fname} ${lname}, hobbies: ${hobby} |${hobby.length}| `)
// }


// profile("faris","cuteboy","football","Badminton","Basketball")

// lab7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array 
// และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]
// let doubleAndReturnArgs = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doublearr = num.map((item) => item * 2)
//   return arr.concat(...doublearr)
// }
// let result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6, 7)
// console.log(result)


// lab9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// let cloneArray = (arr)=> newarr = [...arr]

// arr = ["A","B","C","D"]

// console.log(cloneArray(arr))

// lab10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// let cloneArray = (obj) => newobj = { ...obj }

// obj = { key: "A", key1: "B", key2: "C", key3: "D" }

// console.log(cloneArray(obj))
// console.log(newobj)

// lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // 'Maya
// console.log(second); // 'Marisa
// console.log(third); // 'Chi'

// lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // 'Raindrops on roses'
// console.log(whiskers); //'whiskers on kittens' 
// console.log(aFewOfMyFavoriteThings); // 'Bright copper kettles','warm woolen mittens',

// lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); //[10,30,20] 

// lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // numPlanets: 8
// console.log(yearNeptuneDiscovered); //yearNeptuneDiscovered: 1846

// lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); //  yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659

// lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // Your name is  Alejandroand you like purple
// getUserData({ firstName: 'Melissa' }); // Your name is Melissa you like green
// console.log(getUserData({})) //Your name is undefined and you like green


// lab17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';

//  [guest,admin]=[admin,guest]
//  console.log(guest)
//  console.log(admin)


// lab18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName 
// และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล 
// ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)

// let ageValidation = ({ fname, lname, age }) => age > 18 ? console.log(`Welcome ${fname} ${lname}`) : age <= 18 ? console.log("invalid access") : null

// ageValidation({ fname: "Nattapong", lname: "Nakcharin", age: 24 })

// lab19
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
// //     name: 'John',
// //     years: 27
// //   };


// // let {
// //     name,
// //     years:age,
// //     isadmin = false
// // } = user


// // console.log(name);
// // console.log(age);
// // console.log(isadmin)


// lab21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// lab22

// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };
// let {prop:a, prop2:b} = obj
// console.log(a)
// console.log(b)

// lab23
// a และ b มีค่าเท่าไร
// let a, b;
// let { a, b } = { a: 1, b: 2 };
// console.log(a)
// console.log(b)

// lab24
// a และ b มีค่าเท่าไร
// const [, , , a, b] = [1, 2, 3];//undifined


// lab25
// ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] };

// lab26
// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y,]
//     }
//   }
// } = q

// console.log(x);
// console.log(y);

// lab27
// ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for(let i of names){
//   let{firstName,lastName}=i
//   fullName = firstName + ' '+lastName
//   console.log(fullName)
// }

// lab 28
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let i of users) {
//   let { user, age = 'unknown'} = i
//   console.log(user,age)
// }

