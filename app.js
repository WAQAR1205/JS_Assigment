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
// QUESTION 12 
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

// CHAPTER 06-09
// QUESTION 01
// var a = +prompt('Please enter a number' , 10)
// var heading = document.createElement('h1')
// heading.innerHTML = 'Result'
// document.body.appendChild(heading)
// document.write(`The value of a is: ${a}</br></br> <hr> </br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = ++a
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = a++
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = --a
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = a--
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
// var table = document.createElement('table')
// var tbody = document.createElement('tbody')
// var marks = 150
// var tm = marks*3
// var sub1 = +prompt('Enter Your English Marks', 0)
// var sub2 = +prompt('Enter Your Urdu Marks', 0)
// var sub3 = +prompt('Enter Your Math Marks', 0)
// var per1 = (sub1/150)*100
// var per2 = (sub2/150)*100
// var per3 = (sub3/150)*100
// var om = sub1 + sub2 + sub3
// var percen = (om/300)*100
// var data = [
//     ['Subject' , 'Total Marks' , 'Obtain Marks' , 'Percentage'],
//     ['English' , marks , sub1 , per1],
//     ['Urdu' , marks , sub2 , per2],
//     ['Math' , marks , sub3 , per3],
//     ['' , tm , om,percen]
// ] 
// for(i = 0 ; i<data.length;i++){
//     var tr = document.createElement('tr')
//     for(j = 0 ; j<data[i].length;j++){
//         var th = document.createElement('th')
//             var textNode = document.createTextNode(data[i][j])    
//             th.appendChild(textNode)
//             tr.appendChild(th)
//     }
//     tbody.appendChild(tr)
// }
// table.appendChild(tbody)
// table.style.border = '1px solid black'
// document.body.appendChild(table)

// CHAPTER 10-12
// C7QUESTION01
// var city = prompt('Enter your city name' , 'Karachi')
// document.write(`Welcome! to ${city}`)

// QUESTION02
// var gender = prompt('Enter gender male or female')
// if(gender === 'male' || gender === 'Male' || gender === 'MALE' || gender==='m' || gender==='F'){
//     alert(`Good Morning! Sir`)
// } else{
//     alert(`Good Morning! Mam`)
// } 
// QUESTION 03
// var color = prompt('Enter color symbol R G Y')
// if(color === 'R'){
//     alert("Stop!")
// }else if(color==='G'){
//     alert("Move NOw")
// }
// else{
//     alert("Ready to move")
// }
// QUESTION 04
// var fuel = +prompt('How many litres fuel you have')
// if(fuel <=0.25){
//     alert('Please refill your fuel')
// }else{
//     alert{'You have enough fuel'}
// }
// Question 05
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// } if (false) {
//     alert("False");
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// QUESTION 06
// var table = document.createElement('table')
// var tbody = document.createElement('tbody')
// var marks = 150
// var tm = marks*3
// var sub1 = +prompt('Enter Your English Marks', 0)
// var sub2 = +prompt('Enter Your Urdu Marks', 0)
// var sub3 = +prompt('Enter Your Math Marks', 0)
// var per1 = (sub1/150)*100
// var per2 = (sub2/150)*100
// var per3 = (sub3/150)*100
// var om = sub1 + sub2 + sub3
// var percen = (om/300)*100
// var data = [
//     ['Subject' , 'Total Marks' , 'Obtain Marks' , 'Percentage'],
//     ['English' , marks , sub1 , per1],
//     ['Urdu' , marks , sub2 , per2],
//     ['Math' , marks , sub3 , per3],
//     ['' , tm , om,percen]
// ] 
// for(i = 0 ; i<data.length;i++){
//     var tr = document.createElement('tr')
//     for(j = 0 ; j<data[i].length;j++){
//         var th = document.createElement('th')
//             var textNode = document.createTextNode(data[i][j])    
//             th.appendChild(textNode)
//             tr.appendChild(th)
//     }
//     tbody.appendChild(tr)
// }
// table.appendChild(tbody)
// table.style.border = '1px solid black'
// document.body.appendChild(table)
// if(percen >= 80){
//     document.write(`Grade A-one </br> Excellent`)
// } else if(percen >= 70){
//     document.write(`Grade A </br> Good`)
// } else if(percen >= 60){
//     document.write(`Grade B </br> You need to improve`)
// }
// else{
//     document.write(`Grade fail </br> Sorry!`)
// }

// QUESTION 07
// var num = 8
// var userGuess = +prompt("Guess the secret number (between 1 and 10)");
// var right = num - userGuess
// if (userGuess === num) {
//   alert("Bingo! Correct answer.");
// } else if (right === 1 || right == -1) {
//   alert("Close enough to the correct answer.");
// } else {
//   alert("Sorry, try again.");
// }
// QUESTION 08
// var num = +prompt('Enter number to find that number is divisible by 3')
// var res = num % 3
// console.log(res)
// if(res === 0){
//     alert('Number is divisible by 3')
// } else{
//     alert('Not divisible by 3')
// }
// QUESTION 09
// var num = +prompt('Enter number to check that Number is EVEN or ODD')
// var res = num % 2
// console.log(res)
// if(res === 0){
//     alert('Even Number')
// }else{
//     alert('Odd Number')
// }
// QUESTION 10
// var temp = +prompt('Enter temperature outside')
// if(temp > 40){
//     alert("Its hot outside")
// }else if(temp > 30){
//     alert("The weather todays is normal")
// }else if(temp > 20){
//     alert("Todays weather is cool")
// }else if(temp > 10){
//     alert("OMG! todays weather is so cool")
// }
// QUESTION 11
// var num1 = +prompt('enter first number' , 9)
// var op = prompt('operatiomn apply (+ < _ < ? < * < %)', '+')
// var num2 = +prompt('enter second number',9)
// if(op === '+'){
//     alert(num1 + num2)
// } else if(op === '-'){
//     alert(num1 - num2)
// } else if(op === '/'){
//     alert(num1 / num2)
// } else if(op === '*'){
//     alert(num1 * num2)
// } else if(op === '%'){
//     alert(num1 % num2)
// }

// CHAPTER 14 -16
// QUESTION 01
// const stdNames = [];
// QUESTION 02
// var stdName = new Array()
// QUESTION 03
// var stringArray = ['waqar' , 'ashar']
// QUESTION 04
// var numbArray = [1 , 2 , 3]
// QUESTION 05
// var booleanArray = [true , false]
// QUESTION 06
// var mixedArray = ['waqat' , 10 , true]
// QUESTION 07
// var qualification = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.Phil' , 'PhD']
// var sp = '</br>'
// document.write(`<h1>Qualification</h1>`)
// for(i = 0 ; i <= qualification.length-1 ; i++){
//     document.write(`${[i + 1]}) ${qualification[i]} ${sp}`)
// }
// QUESTION 08
// var stdName = ['Michael' , 'John' , 'Tony']
// var StdMark = [320 , 230 , 480]
// var totalMarks = 500
// var sp = '<br/>'
// for(i = 0 ; i <= stdName.length-1 ; i++){
//     var res = (StdMark[i]/totalMarks)*100
//     document.write(`Score of ${stdName[i]} is ${StdMark[i]}. Percentage: ${res}% ${sp}`)
// }
// QUESTION 09
// var color = []
// var colorInput = prompt("ENTER COLOR NAME YOU WANT TO ADD AT BEGGING OF AN ARRAY" , 'RED')
// color.unshift(colorInput)
// document.write("A) " + ' ' + color + "</br>")
// var colorInput = prompt("ENTER COLOR NAME YOU WANT TO ADD AT END OF AN ARRAY" , 'YELLOW')
// color.push(colorInput)
// document.write("B) " + ' ' + color + "</br>")
// var colorInput1 = prompt("ENTER COLOR NAME YOU WANT TO ADD AT BEGGING OF AN ARRAY" , 'RED')
// var colorInput2 = prompt("ENTER COLOR NAME YOU WANT TO ADD AT BEGGING OF AN ARRAY" , 'blue')
// color.unshift(colorInput1)
// color.unshift(colorInput2)
// document.write("C)" + ' ' + color + "</br>")
// color.shift()
// document.write("D)" + ' ' + color + "</br>")
// color.pop()
// document.write("E)" + ' ' + color + "</br>")
// var index = +prompt("enter index number you want to add color" , 1)
// var usercolor = prompt("enter color name you want to add" , 'orange')
// color.splice(index , 0 , usercolor)
// document.write("F)" + ' ' + color + "</br>")
// var startindex = +prompt("enter index number you want to delete color" , 0)
// var endindex = +prompt("enter color index you want to delete" , 1)
// color.splice(startindex , endindex)
// document.write("G)" + ' ' + color + "</br>")
// QUESTION 10
// const studentScores = [320, 230, 480, 120];
// var sp = '<br/>'
// document.write(`Original Array = ${studentScores} ${sp}`);
// for (let i = 0; i <br studentScores.length; i++) {
//   for (let j = i + 1; j < studentScores.length; j++) {
//     if (studentScores[i] > studentScores[j]) {
//       const temp = studentScores[i];
//       studentScores[i] = studentScores[j];
//       studentScores[j] = temp;
//     }
//   }
// }
// document.write(`Sorted Array = ${studentScores}`);
// QUESTION 11
// var cities = ['karachi' , 'lahore' , 'islamabad' , 'quetta' , 'peshawar']
// var sp = '</br>'
// var copy_city = cities.slice(2 , 4)
// document.write(`${cities} ${sp} `)
// document.write(copy_city)
// QUESTION 12
// var array = ['this' , 'is' , 'my' , 'cat']
// var sp = "</br>"
// document.write(`<h1>ARRAY</h1> ${array} ${sp}`)
// var join = array.join(" ")
// document.write(`<h1>STRING</h1> ${join}`)
// QUESTION 13
// var fifo_array = []
// fifo_array.push('keyboard')
// fifo_array.push('mouse')
// fifo_array.push('printer')
// fifo_array.push('monitor')
// document.write("<h1>DEVICES<h1>" + fifo_array)
// document.write('<h1>FIFO<h1>' + 'OUTPUT' +'</br>' + fifo_array.shift() + '<br/>' + 'OUTPUT' + "</br>" + fifo_array.shift() + '<br/>' + 'OUTPUT' + '</br>' + fifo_array.shift() + '<br/>' + 'OUTPUT' + '<br/>' fifo_array.shift() )
// QUESTION 14
// var lifo_array = []
// lifo_array.push('keyboard')
// lifo_array.push('mouse')
// lifo_array.push('printer')
// lifo_array.push('monitor')
// document.write("<h1>DEVICES<h1>" + lifo_array)
// document.write('<h1>LIFO<h1>' + 'OUTPUT' +'</br>' + lifo_array.pop() + '<br/>' + 'OUTPUT' + "</br>" + lifo_array.pop() + '<br/>' + 'OUTPUT' + '</br>' + lifo_array.pop() + '<br/>' + 'OUTPUT' + '<br/>' + lifo_array.pop() )
// QUESTION 15
// var phone=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

//  document.write("<br><select id=phone> <option value=apple>Apple</option>  <option value=samsung>Samsung</option> <option value=Motorola>Motorola</option> <option value=Nokia>Nokia</option><option value=Sony>Sony</option> <option value=Haier>Haier</option></select>" )
