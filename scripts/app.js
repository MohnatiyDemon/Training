// // classic function
// function bankDepositCalculator (deposit, rate, countMouth) {
//     return deposit * (1 + rate/ 12) ** countMouth    
// }

// let tamerlanBankDeposit = bankDepositCalculator(50000, 0.12, 120)
// console.log(tamerlanBankDeposit)

// // anonimous function

// const depositCalculator = function (deposit, rate, countMouth) {
//     return deposit * (1 + rate / 12) ** countMouth
// }
// console.log(depositCalculator(100000, 0.15, 36))

// // arrow function

// const bankCalculator = (deposit, rate, countMouth) => {
//     return deposit * (1 + rate / 12) ** countMouth
// }
// console.log(bankCalculator(10000, 0.12, 24))

// function toPower(num, power) {
//     const res = num ** power
//     return res
// }

// console.log(toPower(2, 10))

// const appPower = (num, power) => {
// return num ** power
// }
// console.log(appPower(2, 10))

// let age = prompt('Введите свой возраст')


// const accessSuccesful = age => age >= 18 ? ('Успешный вход') : ('Вход запрещен')


// console.log(accessSuccesful(age))


/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

//about user :


// function canTakeCredit(age, hasJob) {
// 	switch(true) {
// 		case age > 24 && hasJob == true:
// 			return 500
// 		case age > 24:
// 			return 100
// 		default:
// 			return 0	
// 	}
// }

// function canBuy(price, currentBalance, age, hasJob = false) {
// 	const credit = canTakeCredit(age, hasJob)
// 	return credit + currentBalance >= price
// }

// console.log(canBuy(2000, 1900, 25,))


// Array

// const usersArr = ['Metew', 'Ann', 'Tom', 'Jhon']

// usersArr.push = 'Tim'
// usersArr.unshift = 'Ember'
// usersArr.push = 'Fedor'

// console.log(usersArr.length)
// const del = usersArr.pop(1)
// console.log(usersArr)
// console.log(del)

// console.log(usersArr.indexOf('Tom'))
// usersArr.shift(0)
// usersArr.push = 'Macconahi'
// console.log(usersArr)
// if (usersArr.includes('Metew')) {
// 	console.log('Acces succesfull')
// } else {
// 	console.log('Acces is not allowed')
// }

// // search in arr

// //includes :

// console.log(usersArr.includes('Tim'))

// //indexOf :

// console.log(usersArr.indexOf('Ann'))

// let newArr = new Array ('Artem', 'Masha', 'Vladislav', 'Tamerlan', 'Alexander')

// console.log(newArr)

// console.log(newArr.slice(1,4))

// console.log(newArr)

// let cutedArr = newArr.slice(2)

// console.log(cutedArr)

// console.log(newArr)

// // let newestArr = newArr.splice(2, 5)
// // console.log(newestArr)

// //splice use primary arr. second argument in splice == length arr 


// //slice take new arr and dont touch firsr arr. second argument in slice is index 

// console.log(newArr.reverse()) //reverse in current and primary Array

// //concat() can concated 2 array:
// //example:

// const secondArray = new Array('Nikita', 'Harry', 'Elena')

// const concatArr = newArr.concat(secondArray)

// console.log(concatArr.length)

// //array to string and string to array

// //join() => arr to string example:

// let arrToString = concatArr.join(', ')
// console.log(arrToString)

// //split() =>string to array // example:

// let stringToArray = arrToString.split(', ')
// console.log(stringToArray)

// const tasks = ['Задача 1']

// function addTask(add) {
// 	tasks.push(add)
// 	return tasks
// }

// function delTask(del) {
//  const index = tasks.indexOf(del)
//  if (index === -1) {
// 	console.log('Введите точное название удаляемой задачи')
// 	return;
//  }
//  tasks.splice(index, 1)
// }

// function transferTask(transfer) {
// 	const index = tasks.indexOf(transfer)
// 	const lastTask = tasks[index]
// 	if (index === -1) {
// 		console.log('Введите точное название переносимой задачи')
// 		return;
// 	 }
// 	tasks.splice(index, 1)
// 	tasks.unshift(lastTask)
// 	return transferTask
// }

// addTask('Задача 2')
// addTask('Задача 3')
// addTask('Возраст 28')
// addTask('Город Москва')
// // delTask('Задача 4')
// // transferTask('Задача 5')
// console.log(tasks)

// const [Task1, Task2, Task3, age, city] = tasks

// console.log(age, city, tasks, Task1)


// const [Male, Famale, ...Other] = tasks

// console.log(Other, Famale, Male)



// const url = 'https://purpleschool.ru/course/javascript'

// function split(url) {
// 	const [protocol, _, domen, ...path] = url.split('/')
// 	console.log(`Протокол: ${protocol.split(':')[0]}`)
// 	console.log(`Домен: ${domen}`)
// 	console.log(`Путь: ${path.join('/')}`)
// }

// console.log(split(url))


// const arr = new Array('Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5')

// console.log(arr)

// for (i = 0; i < arr.length; i++) {
// 	if (arr[i] == arr[6]) {
// 		break
// 	 }
// 	console.log(arr[i])
	
// 	}

// const arr = new Array ('!', 'JS', 'люблю', 'Я')

// const newArr = [];

// for (i = arr.length -1; i >= 0; i--) {
// 	newArr.push(arr[i])
// }
// console.log(newArr.join(' '))

// console.log(arr.reverse().join(' '))
// let i = 0
// while (i < 10) {
// 	console.log(`Just text ${i}`)
// 	i++
// }

// console.log(i)

// i = 0

// do {
// 	console.log(`Do it ${i}`)
// 	i++
// } while (i < 10)

// console.log(i)

// const arr = new Array (1, 2, 3, 4, 5, 6)
// console.log(arr)

// for (elem of arr) {
// 	console.log(elem)
// }

// for (index in arr) {
// 	console.log(arr[index])
// }





// const opertations = new Array(1000, -700, 300, -500, 10000)

// console.log(opertations)

// let balance = 100
// function currentBalance(opertations) {
// 	for (elem of opertations) {
// 		balance = balance + elem
// 	}
// 	return balance
// }


// console.log(currentBalance(opertations))


// // i = 0
// function differentBalance(opertations) {
// 	let positive = 0
// 	let negative = 0
// 	for (element of opertations) {
// 		if (element > 0) {
// 			positive += element
// 		}
// 		if (element < 0) {
// 			negative += element
// 		}
// 	}
// 	return [negative, positive]
// }
// console.log(differentBalance(opertations))


// function currentBalance(opertations) {
// 	let isTrue = true
// 	for (elem of opertations) {
// 		if (elem < 0) {
// 			isTrue = false
// 			break
// 		}
// 	}
// 	return isTrue
// }

// console.log(currentBalance(opertations))

// function sum (a, b) {
// 	return a + b
// }
// function minus(a, b) {
// 	return a - b
// }
// function bissectrisa(a, b) {
// 	const res = a**2 + b**2
// 	return res
// }
// function callback (a, b, fn) {
// 	const res = fn(a, b)
// 	return res
// }

// console.log(callback(10, 5, bissectrisa))


// const arr = [2, -6, 8, 4, 4, 10, 20, 56, 45]

// // const overageArr = arr.reduce((acc, value, i) => {
// // 	if (i != arr.length - 1) {
// // 		return acc + value
// // 	} else {
// // 		return (acc + value) / arr.length
// // 	}
// // })

// // console.log(overageArr)

// // function some(arg) {
// // 	const findArrCount = arr.find(el => el === arg)
// // 	if (findArrCount === arg) {
// // 	return true
// // } else { 
// // 	return false;
// // }
// // }
// // console.log(some(10))

// console.log(arr.sort((a, b) => a - b))

// const card = '2344445524258834'
// console.log(card.slice(-4).padStart(16, '************'))

// const obj = [
// 	{name: 'Cris', age: 24},
// 	{name: 'Tim', age: 26},
// 	{name: 'Pan', age: 28},
// 	{name: 'Alex', age: 19}
// ]
// const sortedAge = obj.sort((a, b) => {
// 	return a.age - b.age
// })
// console.log(sortedAge)


// const wallet = {
// 	balance: 0,
// 	operations: [],
// 	increase: function(sum, reason) {
// 		this.balance += sum
// 		this.operations.push({
// 			reason: reason,
// 			sum: sum
// 	})	
// 		return true
// 	},
// 	decrease: function(sum, reason) {
// 		if (this.balance < sum) {
// 			console.log('Недостаточно денег')
// 			return false
// 		}
		
// 		this.balance -= sum
// 		this.operations.push({
// 			reason: reason,
// 			sum: -sum
// 	})
// 		return true
// 	},
// 	getOperationLength: function() {
// 		return this.operations.length
// 	}
// }
// console.log(wallet.increase(5000, 'Sellary'))
// console.log(wallet.getOperationLength())
// console.log(wallet.balance)
// console.log(wallet.decrease(300, 'Bought sandwich'))
// console.log(wallet.balance)
// console.log(wallet.getOperationLength())
// console.log(wallet.increase(2000, 'trasnfer from mom'))
// console.log(wallet.decrease(10000, 'try  to bay laptop'))
// console.log(wallet.balance)
// console.log(wallet.getOperationLength())

// const company = {
// 	name: 'OOO Агро',
// 	employs: [
// 		{
// 			name: 'Света',
// 			getName: function() {
// 				console.log(this.name)
// 			}
// 		}
// 	],
// 	ceo: {
// 		name: 'Вася',
// 		getName: function() {
// 			console.log(this.name)
// 		}
// 	},
// 	getName: function () {
// 		console.log(this.name)
// 	}

// 	}

// company.getName()
// company.ceo.getName()
// company.employs.map(employs => employs.getName())

// (function () {
// 	const a = 10
// 	const b = 20
// 	console.log(a * b)
// }) ()4

// const userInfo = { 
// 	balance: 0,
// 	operations: 0,
// 	increase(sum) {
// 		this.balance +=sum;
// 		this.operations++;
// 	}
// }

// const user1 = function () {
// 	const userObj = userInfo
// 	return function() {
// 		return userObj
// 	}
// }
// const user2 = user1()

// user2().increase(100)

// user2().increase(300)

// console.log(user2())




// function clickButton () {
// 	const input = document.querySelector('.input').value
// 	if (!input) {
// 		return
// 	}
// 	console.log(input)
// 	document.querySelector('.text').innerText = input
// 	document.querySelector('.input').value = ''
// }

