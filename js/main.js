// Uyga vazifa /////////////
// Object 2 //

// N1 //
// function separateNumberToClasses(num) {
//   let obj = {};
//   let strNum = num.toString();
//   let numberClasses = [
//     "birlar",
//     "minglar",
//     "millionlar",
//     "milliardlar",
//     "trillionlar",
//   ];
//   let j = 0;
//   for (let i = strNum.length; i >= 0; i -= 3) {
//     let firstIndex = i >= 3 ? i - 3 : i - 1;
//     let lastIndex = i === 0 ? i + 1 : i;
//     obj[numberClasses[j]] = strNum.slice(firstIndex, lastIndex);
//     j++;
//   }

//   return obj;
// }
// console.log(separateNumberToClasses(8945472985629));

// N2 //
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];
// for (let i = 0; i < books.length; i++) {
//   const { title, author, alreadyRead } = books[i];
//   const readStatus = alreadyRead ? "o'qilgan" : "o'qilmagan";
//   console.log(`${i + 1}. ${author}ning "${title}" kitobi ${readStatus};`);
// }

// N3 //
// let input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// let output = {};

// for (let key in input) {
//   let value = input[key];
//   if (!output[value]) {
//     output[value] = [];
//   }
//   output[value].push(Number(key));
// }

// console.log(output);

// N4 //

// N5 //
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalSum = 0;

// for (let product of products) {
//   const { price, discount, quantity } = product;
//   const discountedPrice = (price * (100 - discount)) / 100;
//   totalSum += discountedPrice * quantity;
// }

// console.log(`Umumiy summa: ${totalSum} so'm`);

// N6 //
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let minValue = Infinity;
// let maxValue = -Infinity;
// let minProduct, maxProduct;
// for (const product of products) {
//   const { price, discount, quantity } = product;
//   const discountedPrice = (price * (100 - discount)) / 100;
//   const totalValue = discountedPrice * quantity;
//   if (totalValue < minValue) {
//     minValue = totalValue;
//     minProduct = product;
//   }
//   if (totalValue > maxValue) {
//     maxValue = totalValue;
//     maxProduct = product;
//   }
// }
// console.log(`Eng kichik qiymat: ${minProduct.name} (${minValue} so'm)`);
// console.log(`Eng katta qiymat: ${maxProduct.name} (${maxValue} so'm)`);

// N7 //
// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// const result = [];
// for (let i in obj) {
//   result.push(i, obj[i]);
// }
// console.log(result);

// N8 //
// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let totalGradePoints = 0;
// let totalCredits = 0;

// for (let { grade, kredit } of grades) {
//   totalGradePoints += grade * kredit;
//   totalCredits += kredit;
// }

// let gpa = totalGradePoints / totalCredits;

// console.log(`GPA: ${gpa.toFixed(2)}`);

// N9 //
// const right_answers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const my_answers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };
// let correctAnswers = 0;
// let wrongAnswers = 0;
// for (const key in right_answers) {
//   if (right_answers[key] === my_answers[key]) {
//     correctAnswers++;
//   } else {
//     wrongAnswers++;
//   }
// }
// console.log(`To'g'ri javoblar: ${correctAnswers}`);
// console.log(`Noto'g'ri javoblar: ${wrongAnswers}`);

// N10 //
// let n = 3;
// let obj = { a: 2, b: 3, c: 4, d: 6 };
// let result = {};
// for (let key in obj) {
//   result[key] = obj[key] * n;
// }
// console.log(result);

// N11 //
// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const { name: productName } = product;
// const {
//   company: {
//     name: companyName,
//     price,
//     founder: { firstName, lastName, birthDate },
//   },
// } = product;

// console.log(productName);
// console.log(companyName);
// console.log(price);
// console.log(firstName);
// console.log(lastName);
// console.log(birthDate);

// N12 //
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];
// const totalPercent = pupils.reduce((sum, pupil) => sum + pupil.protcent, 0);
// const averagePercent = totalPercent / pupils.length;
// console.log(`O'rtacha protcent: ${averagePercent.toFixed(2)}`);

// N13 //
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];
// const newPupils = pupils.map((pupil) => {
//   let grade;
//   if (pupil.protcent >= 90 && pupil.protcent <= 100) {
//     grade = 5;
//   } else if (pupil.protcent >= 80 && pupil.protcent < 90) {
//     grade = 4;
//   } else if (pupil.protcent >= 70 && pupil.protcent < 80) {
//     grade = 3;
//   } else {
//     grade = 2;
//   }
//   return { ...pupil, grade };
// });

// console.log(newPupils);

// N14 //
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];

// const newPupils = pupils.map((pupil) => {
//   const isPassed = pupil.protcent >= 70;
//   return { ...pupil, isPassed };
// });

// console.log(newPupils);

// N15 //
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];

// const passedCount = pupils.filter((pupil) => pupil.protcent >= 70).length;
// const failedCount = pupils.filter((pupil) => pupil.protcent < 70).length;

// console.log(`Imtihondan o'tganlar soni: ${passedCount}`);
// console.log(`Imtihondan o'ta olmaganlar soni: ${failedCount}`);
