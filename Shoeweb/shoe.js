// let mystery = 4;
// if(mystery) {
//     console.log('TRUTHY');
// } else {
//     console.log('FALSY');
// }
// let password = 'Ajisefini';
// if(password.length >= 9 && password.indexOf(' ') === -1) {
//     console.log('VALID PASSWORD');
// }
// else{
//     console.log('INVALID PASSWOORD');
// };

// let num = 30;
// if(num >=1 && num <= 10) {
//     console.log('NUMBER IS BETWEEN 1 TO 10');
// } else{
//     console.log('NUMBER IS MORE THAN 10');

// };

// let age = 90;
// if(age < 6 || age >= 65) {
//     console.log('YOU WILL RECEIVE FOR FREE');
// } else{
//     console.log('YOU WILL HAVE TO PAY');
// }

// let loggedIn;
// if(!loggedIn) {
//     console.log('GET OUT OF HERE');
// } else {
//     console.log('Welome to our World');
// };
//  let x = 7;
//  x == 7 || x === 3 && x > 10;
//  console.log(x)

// let arr = [12, 45, 67,9, 45, 22, 3, 78];
// let Ay = new Array(1, 2, 3, 4, 5, 6, 7);
// let songsTitle = [
// 'All hail the name of Jesus', 
// 'It is well', 
// 'Blessed Assurance',
// 'Amazing Grace'
// ];
// songsTitle.push('Channel Only', true);
// console.log(songsTitle);

// let dishes = ['big bowl'];
// dishes.unshift('small bowl');
// dishes.unshift('mug');

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [9, 10, 11, 12]
// let result = arr2.concat(arr2, arr1);

// let food = [
//     'rice',
//     'beans',
//     'yam',
//     'potato',
//     'semo'
// ];
// food.includes('fish')

// let animals = [
//     'shark',
//      'salmon', 
//      'whale',
//       'bear',
//        'lizard', 'tortoise'
// ];
// let swimmers = animals.slice(0, 3);
// let mammals = animals.slice(2, 4);
// let reptiles = animals.slice(4, 6);


// let myEggs = ['Brown', 'Purple', 'Chocolate', 'Blue']
// console.log(myEggs);

// let select = document.getElementById('select').style.display = 'none';


// let button = [...document.querySelectorAll('.cart')]

// button.map(cart=> cart.addEventListener("click", clickMe()));


// function clickMe() {
//     document.getElementById('select').style.display = 'none'   
// }

// const game = {
//     Player1: {
//         Username: 'Binbo',
//         PlayAs: 'X',
//         Strength: ['Football', 'Basketball'],
//         Email: 'binbo@gmail.com',
//         login() {
//             console.log(this.Email, 'has logged in')
//         },
//         logout() {
//             console.log(this.Email, 'has logged out')
//         }
//     },
//     Player2: {
//         Username: 'Junibar',
//         PlayAs: 'O',
//         Strength: ['Monopoly', 'Chess'], 
//         Email: 'junibar@gmail.com',
//         login() {
//             console.log(this.Email, 'has logged in')
//         },
//         logout() {
//             console.log(this.Email, 'has logged out')
//         }
//     }
// };
// console.log(game);

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email, 'just logged in')
//         return this;
//     }
//     logout() {
//         console.log(this.email, 'just logged out')
//         return this;
//     }
//     updateScore() {
//         this.score++
//         console.log(this.email, 'score is now', this.score)
//         return this;
//     }
// }

// class Admin extends User{
//     deleteUser(user) {
//         Users = Users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }
// let admin = new Admin('Olorunkuleyin@gmail.com', 'Samuel')
// let Users = [userOne, userTwo, userThree, userFour, admin];
// admin.deleteUser(userFour);
// console.log(Users);

// userOne.login().updateScore().updateScore().updateScore().logout();
// userTwo.login().updateScore().updateScore().logout();
// userThree.login().updateScore().updateScore().logout();
// userFour.login().updateScore().updateScore().logout();
// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);
// console.log(userFour);
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out')
}
let userOne = new User('Ajisefini043@gmail.com', 'Abimbola'); 
let userTwo = new User('Omonike@gmail.com', 'Omonike');
let userThree = new User('Dolapy@gmail.com', 'Dolapo');
let userFour = new User('Ogunsleye123@gmail.com', 'Leye'); 
console.log(userOne)
userTwo.login()


let fadeImg = document.querySelectorAll('.sh1');
console.log(fadeImg)
let frontImg = document.querySelectorAll('.product-imgfront')
let fadeImg2 = document.querySelectorAll('.sh2');
console.log(fadeImg2);
let frontImg2 = document.querySelectorAll('.product-imgfront2');
console.log(frontImg2)



for(let i=0; i<fadeImg.length;i++) {
    fadeImg[i].addEventListener("mouseover", (e)=>{
        e.target.nextElementSibling.classList.add("active")
        e.target.classList.add("inactive")
    })
    fadeImg[i].addEventListener("mouseout", (e)=>{
        e.target.nextElementSibling.classList.remove("active")
        e.target.classList.remove("inactive")
    })
}


for(let i=0; i<fadeImg2.length;i++) {
    fadeImg2[i].addEventListener("mouseover", (e)=>{
        e.target.nextElementSibling.classList.add("active")
        e.target.classList.add("inactive")
    })
    fadeImg2[i].addEventListener("mouseout", (e)=>{
        e.target.nextElementSibling.classList.remove("active")
        e.target.classList.remove("inactive")
    })
}