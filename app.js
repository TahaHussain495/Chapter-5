
//         // 1.1. Write a program that take two numbers & add them in a
//         // new variable. Show the result in your browser.
           // var num1 = 3;
          // var num2 = 5;
          // var sum = num1+num2;
          // document.write("<h2>Sum of " + num1 + " and " + num2 + " is " + sum + ".</h2>");

//         // 2. Repeat task1 for subtraction, multiplication, division & modulus.
//         var num1 = 12;
//         var num2 = 4;

//         // Perform arithmetic operations
//         var sum = num1 + num2;
//         var difference = num1 - num2;
//         var product = num1 * num2;
//         var quotient = num1 / num2;
//         var remainder = num1 % num2;

//         // Display results in browser
//         document.write("<h2>Arithmetic Operations</h2>");
//         document.write("<p>Sum of " + num1 + " and " + num2 + " is: " + sum + "</p>");
//         document.write("<p>Subtraction of " + num1 + " and " + num2 + " is: " + difference + "</p>");
//         document.write("<p>Multiplication of " + num1 + " and " + num2 + " is: " + product + "</p>");
//         document.write("<p>Division of " + num1 + " by " + num2 + " is: " + quotient + "</p>");
//         document.write("<p>Modulus of " + num1 + " and " + num2 + " is: " + remainder + "</p>");

//         //3....
//         //a.
//         var number;

//         b.
        // document.write("<p>Value after variable deceleration is:"+ number + "</p>");

//         //c.
        // number =5;

//         //d.
        // document.write("<p>Initial value is: " + number + "</p>");

//         //e.
//         number++;

//         //f.
//         document.write("<p>Value after increment is: " + number + "</p>");

//         //g.
        // number+=7;

//         //h.
        // document.write("<p>Value after addition is: " + number + "</p>");

//         //i.
//         number--;

//         //j.
//         document.write("<p>Value after decrement is: " + number + "</p>");

//         //k.
//         var remainder = number % 3;

//         //l
//         document.write("<p>The remainder value is: " + remainder + "</p>");

//         //4...
//         // Declare a variable for ticket price
//         var ticketPrice = 600;

//         // Calculate the total cost for 5 tickets
//         var totalCost = ticketPrice * 5;

//         // Display the result in the browser
//         document.write("<h2>Total cost to buy 5 tickets to a movie is "+totalCost+"PKR</h2>")








// //5....
// var number = 4; // You can change this number to display any table

// // Display heading
// document.write("<h2>Table of " + number + "</h2>");

// // Loop to generate the table
// for (var i = 1; i <= 10; i++) {
//     document.write("<p>" + number + " x " + i + " = " + (number * i) + "</p>");
// }

// //6..
// // a. Store a Celsius temperature into a variable
// var celsiusTemp = 25;

// // b. Convert Celsius to Fahrenheit
// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// // Output result
// document.write("<p>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F</p>");

// // c. Store a Fahrenheit temperature into a variable
// var fahrenheitValue = 77;

// // d. Convert Fahrenheit to Celsius
// var celsiusValue = (fahrenheitValue - 32) * 5/9;

// // Output result
// document.write("<p>" + fahrenheitValue + "°F is " + celsiusValue.toFixed(2) + "°C</p>");

// //7..
// let priceItem1 = 650
// let priceItem2 = 100
// let quantityItem1 = 3
// let quantityItem2 = 7
// let shippingCharges = 100
// let TotalCost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges

// document.write("<h1> Shopping Cart</h1>")
// document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
// document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
// document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
// document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
// document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
// document.write("<h3>Total Cost: " + TotalCost + "</h3>");


// //8...
// let totalMarks = 980
// let obtaineMarks = 804
// let percentage
// if (obtaineMarks >= 0) {
//     percentage = (obtaineMarks/totalMarks)*100
// }
// document.write("<h1><b>Marks Sheet</b></h1>")
// document.write("<p> Total marks: "+totalMarks+"</p>")
// document.write("<p> Marks obtained: "+obtaineMarks+"</p>")
// document.write("<p> Percentage: "+percentage+"</p>")


// //9.
//     let US_Dollars = 10
//     let Saudi_Riyal = 25
//     let US_to_PKR = US_Dollars*104.80
//     let Riyal_to_PKR = Saudi_Riyal*28
//     let sumCurerncy =US_to_PKR+Riyal_to_PKR
//     document.write("<h1>Currency in PKR</h2>")
//     document.write("<p>Total Currency in PKR: "+sumCurerncy +"</p>")

//     //10..
//     let num = 20
//     let display = ((num+5)*10)/2
//     document.write("<h3>Arithmetic Result: " + display + "</h3>");

//     //11.
//     document.write("<h1>Age Calculator</h1>")
//     let currentYear = +prompt("Enter your current year")
//     let birthYear = +prompt("Enter your birth year")
//     let age = currentYear - birthYear
//     let age1 =age - 1
//     document.write("<p>Current Year:" + currentYear + "</p>")
//     document.write("<p>Birth Year:" + birthYear + "</p>")
//     document.write("<h3> They are either " + age + " or " + age1 + " year old.</h3>")

//     //12..
//     document.write("<h1>The Geometrizer</h1>")
//     let userInputRadius = +prompt("Please Enter Radius")
//     document.write("<p> Radius of a circle:" + userInputRadius + "</p>")
//     let circumference = 2* 3.142 * userInputRadius
//     let area = 3.142 * userInputRadius*userInputRadius
//     document.write("<p>The circumference is:" + circumference + "</p>") 
//     document.write("<p>The area is:" + area + "</p>")

//     //13.The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


//     let favoriteSnack = "Chips"; // Store favorite snack
//     let currentAge = 24; // Store current age
//     let maxAge = 80; // Store maximum age
//     let amountPerDay = 2; // Store estimated amount per day
//     let totalNeeded = (maxAge - currentAge) * 365 * amountPerDay; // Calculate total supply
//     document.write("<h1>The Lifetime Supply Calculator</h1>")
//     document.write("<p>Favourite Snack:" + favoriteSnack + "</p>")
//     document.write("<p>Current age:" + currentAge + "</p>")
//     document.write("<p>Estimated Max Age:" + maxAge + "</p>")
//     document.write("<p>Amount of snacks per day:" + amountPerDay + "</p>")
//     document.write("<p>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</p>");

// </script>
// </body>
// </html>


