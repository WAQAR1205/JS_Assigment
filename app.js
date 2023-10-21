// CHAPTER 01
// QUESTION 01
// alert("ASSALAAM-O-ALIKUM")

// QUESTION 02
// var message = "Error! Please enter a valid password";
// alert(message)

// QUESTION 03
// var welcome = "Welcome to js land.... \n happy coding!"
// alert(welcome)

// QUESTION 04
// var welcome = "Welcome to js land...."
// alert(welcome) 
// welcome = "happy coding!"
// alert(welcome)

// QUESTION 05
// var message = "Hellow.. I can run JS through web browser's console"
// alert(message)
// console.log(message)

// CHAPTER 02
// QUESTION 01
// var username = ""

// QUESTION 02
// var myName = 'Muhammad Waqar Ul-haque'

// QUESTION 03
// var message = "HELLOW WORLD"
// alert(message)

// QUESTION 04
// var name = 'john doe'
// alert(name)
// var age = 15
// var space = ' '
// var years = "years old"
// var myAge = age + space + years
// alert(myAge)
// var message = "Certified Mobile Application development"
// alert(message)

// QUESTION 05
// var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n P"
// alert(pizza)

// QUESTION 06
// var email = "mwaqar1234@gmail.com"
// var myEmail = 'My email address is' + ' ' + email
// alert(myEmail)

// QUESTION 07
// var book = "A smarter way to learn javaScript"
// var learning = "I am trying to learn the Book "
// var myBook = book + learning
// alert(myBook)

// QUESTION 08
// var message = "Yah! I can write HTML content through JavaScript"
// document.write(messsage)

// QUESTION 09
// var symbol = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
// alert(symbol)

// CHAPTER 03
// QUESTION 01
// var age = 15
// var message = 'I am' + ' ' + age + 'years old'
// alert(message)

// QUESTION 02
// var visit = 0
// window.onload = visit++
// var siteVisit = 'you have visited this site' + ' ' + visit + ' ' + 'times'
// alert(siteVisit)

// QUESTION 03
// var year = 1990
// var message = 'MY birthday year is' + ' ' + year
// var space = '\n'
// var type = 'Data type of my decleard variable is' + 'n'
// document.write(message + space + type + typeof(year))

// QUESTION 04
// var name = 'john doe'
// var product = 'T-shirt'
// var quantity = prompt("HOW MANY T_SHIRTS DO YOU WANT")
// var storeName = "XYZ clothing STORE"
// document.write(name + ' ordered ' + quantity + ' ' + product+'(s) on ' + storeName)

// CHATPER 04
// QUESTION 01
// var variable_1
// var variable_2
// var variable_3

// QUESTION 02
// LEGAL 
// var myVariable
// var _privateVariable
// var number123
// var $specialVariable
// var camelCaseVariable

// ILLEGAL

// var 123variable
// var special-variable
// var my variable
// var #hashVariable 
// var for 

// QUESTION 03

// var heading = 'Rules for naming JS variables'
// var node = document.createElement("h1")
// node.innerHTML = heading
// document.body.appendChild(node)
// var para = 'Variable names can only contain numbers, $,letters and - \n .For example $my_1stVariable'
// document.write(para,"</br>")
// var para = 'Variables must begin with a letters,$ or -. For example $name, _name or name'
// document.write(para,"</br>")
// var para = 'Variable names are case sensitive'
// document.write(para,"</br>")
// var para = 'Variable names should not be JS keywords'
// document.write(para,"</br>")

// CHAPTER 05

// QUESTON 01
// var num1 = +prompt("Enter first number" , 3)
// var num2 = +prompt("Enter first number" , 5)
// var result = num1 + num2
// document.write(`sum of ${num1} and ${num2} is =  ${result}`)

// QUESTION 02
// var num1 = +prompt("Enter first number" , 3)
// var cal = prompt('what do you want - , * , / or %' , '-')
// var num2 = +prompt("Enter first number" , 5)
// if(cal === '-'){
//     var res = num1 - num2
//     document.write(`${num1} - ${num2} = ${res}`)
// }
// else if(cal === '*'){
//     var res = num1 * num2
//     document.write(`${num1} * ${num2} = ${res}`)
// }
// else if(cal === '/'){
//     var res = num1 / num2
//     document.write(`${num1} / ${num2} = ${res}`)
// }
// else if(cal === '%'){
//     var res = num1 % num2
//     document.write(`${num1} % ${num2} = ${res}`)
// }
// else{
//     alert('wrong opeartor please refresh the window and try again')
// }

// QUESTION 03
// var initial_val = +prompt('enter value' , 5)
// document.write(`initial value is = ${initial_val} </br>`)
// initial_val = ++initial_val
// document.write(`After increment = ${initial_val} </br>`)
// initial_val = initial_val + 7
// document.write(`Adding 7 = ${initial_val} </br>`)
// initial_val = --initial_val
// document.write(`After decrement = ${initial_val} </br>`)
// initial_val = (initial_val%3)
// document.write(`The reminder is = ${initial_val}`)

// QUESTION 04
// var tickets = +prompt('how many tickets do you want' , '5')
// var resukt = tickets*600
// document.write(`Total cost of ${tickets} tickets to a movie is ${resukt} PKR`)

// QUESTION 05
// var table = +prompt("table of " , '4')
// for(i = 1 ; i <= 10 ; i++){
//     document.write(`${table} x ${i} = ${table*i} </br>`)
// }

// QUESTION 06
// var tempConvtTo = prompt('Convert F to C or C to F (Just type F or C in capital)' , 'F')
// var msg = 'Please enter write value'
// if(tempConvtTo === 'F'){
//     var  Fahrenheit = +prompt("Enter Temp in FEHRENHEIT" , 60)
//     var result = C = ((Fahrenheit - 32 ) * 5/9).toFixed(2)
//     document.write(`Fahrenheit to Celsius = ${result}`)
// }
// else if(tempConvtTo === 'C'){
//     var Celsius = +prompt('Enter Temp in CELSIUS' , 10)
//     var result = F = ((Celsius * 9/5) + 32).toFixed(2)
//     document.write(`Celsius To Fahrenheit = ${result}`)
// }
// else{
//     alert(msg)
//     document.write(`User input Wrong value of = ${tempConvtTo} Refresh the page to continue`)
// }

// QUESTION 07
// var heading = document.createElement('h1')
// heading.innerHTML = 'SHOPPING CART'
// document.body.appendChild(heading)
// var item1 = 'Price of item 1 is 650'
// var item2 = 'Price of item 2 is 100'
// alert(item1)
// var quantity1 = +prompt('How many item 1 do you want' , 9)
// alert(item2)
// var quantity2 = +prompt('How many item 2 do you want' , 9)
// var result = ((650 * quantity1) + (100 * quantity2))
// document.write(`${item1} </br> Quantity of item 1 is ${quantity1} = ${quantity1*650} </br> ${item2} </br> Quantity of item 2 is ${quantity2} = ${quantity2*100}</br> Total cost of items 1 and items 2 is = ${result}`)

// QUESTION 08
// var heading = document.createElement('h1')
// heading.innerHTML = 'MARK SHEET'
// document.body.appendChild(heading)
// var total = 980
// var obtain = +prompt('Enter your obtain marks' , 0)
// var res = (obtain/total)*100
// document.write(`Total marks = ${total} </br> Marks obtain = ${obtain} </br>`)
// if(obtain <= 980){
//     document.write(`Percentage = ${res}`)
// }
// else{
//     document.write('Error')
// }

// QUESTION 09
// var heading = document.createElement('h1')
// heading.innerHTML = 'Total Currency in PKR'
// document.body.appendChild(heading)
// var usDolla = +prompt('how many US_DOLLARS you have' , 10)
// var sr = +prompt('how many SUDI_RIYALS you have' , 25)
// var total = (104.80 * usDolla) + (28 * sr)
// document.write(`Exchange Rate: 1 US Dollaar = 104.80PKR and 1 SUDI RIYAL = 28PKR </br> US_DOLLARS you have = ${usDolla} </br> SUADI RIYALS you have = ${sr} </br>Total CUrrency = ${total}`)

// QUESTION 10
// var num = +prompt('Enter a number' , 5)
// var expre = '</br>adding 5 </br>Then Multiple by 10 </br>Divided the Result by 2'
// var cal = ((num + 5)*10)/2
// document.write(`Your number is = ${num}</br>Perform:- ${expre} </br>FinalResult is = ${cal}`)

// QUESTION 11
// var heading = document.createElement('h1')
// heading.innerHTML = 'Age Calculator'
// document.body.appendChild(heading)
// var date = new Date()
// var currentYear = date.getFullYear()
// var dob = +prompt('enter your date of birth like')
// if(dob === ''){
//     alert('Please enter your dob and refresh page')
// }
// else if(dob > 2023){
//     alert('Tear to shuddi-karan hoga')
// } 
// else{
//     var res = currentYear - dob
//     var res1 = date.getTime()
//     var res2 = res1/(1000*60*60*24*7*12)
// }
//  QUESTION 12 
// var radius = +prompt('Circlr Radis..??' , 20)
// var py = 3.142
// var circumference = 2*(py*radius).toFixed(2)
// var area = py*(2^radius).toFixed(2)
// document.write(`Radius of circle = ${radius} </br>Circumferener = ${circumference} </br>Area = ${area}`)

// QUESTION 13
// var heading = document.createElement('h1')
// heading.innerHTML = 'The Lifetime supply Calculator'
// document.body.appendChild(heading)
// var fs = prompt('Favourite snaks', 'chocolate chip')
// var ca = +prompt('Your current age' , 15)
// var esstimate = +prompt('Estimate age', 65)
// var aospd = +prompt('Ammount of snaks you eat per day' , 5)
// var sr = esstimate - ca
// var res = (365*5)*sr
// document.write(`Favourite snaks = ${fs} </br>Current agr = ${ca} </br>Esstimate age = ${esstimate} </br>Eat snaks per day = ${aospd}</br>You will need ${res} ${fs} tp last you untill the ripe old age of ${esstimate}`)

// CHAPTER 06
// QUESTION 01
// var a = +prompt('Please enter a number' , 10)
// var heading = document.createElement('h1')
// heading.innerHTML = 'Result'
// document.body.appendChild(heading)
// document.write(`The value of a is: ${a}</br></br> <hr> </br></br>`)
// var res = ++a
// document.write(`The value of a is: ${a}</br></br>`)
// document.write(`Now the value of a is: ${a}</br></br>`)
// var res = a++
// document.write(`The value of a is: ${a}</br></br>`)
// document.write(`Now the value of a is: ${a}</br></br>`)
// var res = --a
// document.write(`The value of a is: ${a}</br></br>`)
// document.write(`Now the value of a is: ${a}</br></br>`)
// var res = a--
// document.write(`The value of a is: ${a}</br></br>`)
// document.write(`Now the value of a is: ${a}</br></br>`)

// QUESTION 02
// var a = 2 , b=1
// var res = --a - --b + ++b + b--
// document.write(`a is = ${a} </br> b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b + ++b
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b + ++b + b--
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)

// QUESTION 03