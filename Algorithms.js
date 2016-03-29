// Print 1-255
// Write a program (sets of instructions) that would print all the numbers from 1 to 255.

for (var i = 1; i<256; i++){
	console.log(i);
}

// Print odd numbers between 1-255
// Write a program (sets of instructions) that would print all the odd numbers from 1 to 255.

function odd_nums(min,max) {
	var y = [];
	 if (min % 2){ min++}
		for (var i = min; i <= max; i+=2){
   				y.push(i);
   		{		
   		return y;
}
}

// Print Sum
// Write a program that would print the numbers from 0 to 255 but this time, it would also print the sum of the numbers that have been printed so far. For example, your output should be something like this:
// New number: 0 Sum: 0
// New number: 1 Sum: 1
// New Number: 2 Sum: 3
// New number: 3 Sum: 6

var sum = 0;
for (var i = 0; i<256; i++){
	sum = sum + i;  
	console.log("New number:" + i + " Sum:" + sum + "\n" );
}

// Iterating through an array
// Given an array X, say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.  Being able to loop through each member of the array is extremely important.

var x = [1,3,5,7,9,13]
for (var i = 0; i < x.length; i++){
console.log(x[i]);
}

// Find Max
// Write a program (sets of instructions) that takes any array and prints the maximum value in the array. Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.

var x = [22,1,-3,5,7,-9,13];
var max = x[0];
for (var i = 0; i < x.length; i++){
    if (x[i] > max){
        max = x[i];
    }
}
console.log(max)

//Get Average
// Write a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases. You can use a count function with this assignment.

var x = [22,1,-3,5,7,-9,13]
var sum = 0
for (var i = 0; i < x.length; i++){
   sum = sum + x[i];
    }
console.log(sum / x.length)


// Array with Odd Numbers
// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].

var y = []
for (var i = 0; i < 256; i=i+2){
	y.push(i);
}
console.log(y)

// Greater Than y
// Write a program that takes an array and returns the number of values in that array whose value is greater than a given value y. For example if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array that are greater than 3).

var x = [1,3,5,7];
var y = 3; 
var count = 0;

for (var i = 0; i < x.length; i++){
	if (x[i]> y){
		count = count + 1; //count++
	} 
}

console.log(count)

// Square the values
// Given any array x, say [1, 5, 10, -2], create an algorithm (sets of instructions) that multiplies each value in the array by itself.  When the program is done, the array x should have values that have been squared, say [1, 25, 100, 4].

var x = [1,5,10,-2];

for (var i = 0; i < x.length; i++){
	x[i] = x[i] * x[i];
}
console.log(x)

// Eliminate Negative Numbers
// Given any array x, say [1, 5, 10, -2], create an algorithm that replaces any negative number with the value of 0.  When the program is done, x should have no negative values, say [1, 5, 10, 0].

var x = [1,5,10,-2]

for (var i = 0; i < x.length; i++){
	if (x[i] < 0){
	    x[i] = 0;
	}
}
console.log(x)

// Max, Min, and Average 
// Given any array x, say [1, 5, 10, -2], create an algorithm that prints the maximum number in the array, the minimum value in the array, and the average of the values in the array. 

var x = [1,5,10,-2];
var min = 0; 
var max = 0; 
var sum = 0; 

for (var i = 0; i < x.length; i++){
	sum += x[i];
	if (x[i] > max){
	    max = x[i]}
	 else
	    if (x[i] < min){
	        min = x[i];
	    }
	}

console.log(min);
console.log(max);
console.log(sum/x.length);

// Shifting the values in the array
// Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number by one to the front.  For example, when the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].

var x = [1,5,10,-2];

for (var i = 0; i < x.length-1; i++){
	x[i] = x[i+1];
}
 x[x.length - 1] = 0; 

console.log(x);

// Number to string
// Write a program that takes an array of numbers and replaces any negative number with the string 'Dojo'.  For example if array x is initially [-1, -3, 2], after your program is done that array should be ['Dojo', 'Dojo', 2].

var x = [-1,-3,2];
for (var i = 0; i < x.length; i++){
    if (x[i] < 0){
        x[i] = "Dojo"
    }
}
console.log(x)



function sumToOne(num){
	if (num<1){return0;} //0 or negative
		while (num>= 10{	//more than 1 digit
		var sum=0;			//set up sum
			while(num){		//while num != 0
			var digit = num%10;	//grabs one digit
			num=digit;			//e.g. 123 - 3 = 120
			num /= 10;			//e.g. 120/20 =12
			sum += digit; 		//add held digit to sum
			}
		num = sum;				//set num to sum
		}
	return num;					//returning sum or original num if only one digit
}


//remove negatives from an array
function removeNegatives(arr)
{
	var count=0;
	for (var i =0; i<arr.length; i++)
	{
		if (arr[i] < 0 ){
			count ++
		}
		else
		{
			arr[i-count] = arr[i];
		}
	}
	while (count--)
		{
			arr.pop();
		}
}


//second to last

function secondLast (arr)
{
	if arr.length < 2
	{
		return null;
	}
	else 
	{
		return arr[arr.length -2];
	}
}


//function nth to last

function nth_to_last(arr, n) 
{
	if (arr.length < n || n < 1)
	{
		return null;
	}
	else
	{
		return arr[arr.length - n];
	}
}

//find nth largest
function nth_largest(list, n)
{
	if (list.length < 2 or n<1)
	{
		return false
	}
}


// Write a function that given a string number returns the int representation of it  


function strToNum(str)
{
 
	var exponent = 0;
	var sum = 0;
	for (var i = str.length - 1; i >= 0 ; i--)
	{      
	    var chr = str[i];    
	    var num = Math.pow(10,exponent) * parseInt(chr);

	    if (isNaN(num))
	    {
	    	continue;  
	    }

		sum += num;
		exponent += 1; 
	}

	return sum;

}
console.log(strToNum("$2.835.77"));


// Given a N different open and close braces in a string "( { [ } ] )", check whether the string has matching braces. Return true if the braces match, false otherwise.


function isBalanced(string){
				var stack = [];
				for(var i=0, strlen=string.length; i<strlen; i++){
					switch(string[i]){
						case "{":
							stack.push("{");
							break;
						case "(":
							stack.push("(");
							break;
						case "[":
							stack.push("[");
							break;
						case "}":
							if(stack[stack.length-1] == "{"){ stack.pop(); }
							else { return false; }
							break;
						case ")":
							if(stack[stack.length-1] == "("){ stack.pop(); }
							else { return false; }
							break;
						case "]":
							if(stack[stack.length-1] == "["){ stack.pop(); }
							else { return false; }
							break;				
					}
				}
				return !stack.length
			}
			console.log("should be true, is", isBalanced("{eRWer[rw]werwer}rew"));
			console.log("should be true, is", isBalanced("{eRWer[rw]werwer}(r)ew"));
			console.log("should be false, is", isBalanced("{eRWer[rw(]wer)wer}rew"));
			console.log("should be false, is", isBalanced("{eRWer[rw]werwerrew"));
		})




//Create a 10 X 10 array and randomly fill each cell with "D" or "E"

var iMax = 10;
var jMax = 10;
var f = [];
var rand; 

for (i=0;i<iMax;i++) {
 f[i]=[];
 for (j=0;j<jMax;j++) {
   var de = ["D","E"];
   var rand = de[Math.floor(Math.random() * 2) ];
  f[i][j]= rand;
 }
}

console.log(f);


// Add all the values between 100 and 4000000 inclusively that are divisible by 3 or 5 but not both 3 and 5

var sum = 0;

for (var i = 10; i <= 20; i++)
  {
    if ((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0))
      {
          sum += i;
          console.log(i);
      }
                  
      
  }

console.log(sum);


// Create a function that takes two parameters. The first a word to censor and the second a string of text that may contain the word to be censored. Return the string with the censor word replaced with the correct length of *'s

		// Hard mode: have it replaced with random symbols instead of just *'s

	
		function censor(word, string)
		{
		  
		  	for (var i = 0; i < string.length; i++)
		  	{
		  		var n = string.indexOf(word);

		  		if (n == -1)
				{
					return string;
				}
				else
				{
			  		var arr = string.split('');
			  		for (var j = n; j < n + word.length; j++)
			  		{
			  			arr[j] = "*";
			  		}
			  		var string = arr.join('');
		  		}
			}
			return string;
		  
		}  


console.log(censor("Change", "Nowchange iTchangeme"));

