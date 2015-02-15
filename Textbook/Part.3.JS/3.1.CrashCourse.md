# JavaScript crash course.

This part will be rather short. We will be covering JavaScripts history and basics of writing code on it.

## What is JavaScript?

JavaScript is a dialect of EcmaScript. It is dynamic prototype scripting language that generally use for browser scripting, but also can be used for server side(NodeJS, io.js). Most famous JavaScript engines are V8(Google), SpiderMonkey(Mozilla/Firefox) and Rhino(Mozilla).

## History

**Brendan Eich**
JavaScript was developed in 1995 by Brendon Eich while he was working in Netscape(now Mozilla Foundation). Original name was LiveScript, but since in those days word `Java` were really popular, so he decided to call it JavaScript. In 1997 Ecma International(till 1994 European Computer Manufacturers Association - **ECMA**) with support from Netscape delivered official standardized specification of JavaScript, that called ECMAScript.

![Brendan Eich](https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg)

## The code

Note: I will be shortening word JavaScript to JS.

### Variables and atoms

JS is a dynamic language or to be correct, it is dynamically typed. That means that you do not need define type of variable when you creating it. Think about variable like a cup. You don't need to define cup for coffee, for tea, for rice, you just simply pour tea into the cup and drink it. Same concept applies here.

In JS there three main `atom` type. 

 - String - we can simply call it text. Example: 'milk', 'I love you!', '42' etc.
 - Integer - A whole number. Example: 1, 2, 42, -275 etc.
 - Float - Like integer, but can hold decimal numbers. Example: 3.14159265359...
 
They called `atom`s because they are the most basic types in the language.
In JS you must initialize variable. To do this you simply place `var` before varible.

```js
var x = 'hello'; //Defining variable x with string value 'hello'

x 	= 	'alice'; //Assigning string 'alice'

x 	= 	42; 	//Assigning integer

x 	= 	3.14 	//Assigning float 

```

### Arrays
Array is indexed collection of elements. To access element you need to know the index of it. Usually in most of the programming languages you define it in square brackets `[] === Array`. Think about `array` like its a street. Each house has its number(index).

Note: In programming you start to count from `0`, not `1`. So first element will always be `0`.

```js
// element   0    1     2    3
var array = [1, 'two', 3.14, []];

array[0] === 1; //Will return element 0 which is equal to 1

array[1] === 'two'; 

array[2] === 3.14;

array[3] === []; //Will return an empty array
```

To add item to array you `push` it:

```js

var array = [];

array.push('hello');
array.push('world!');

array === ['hello', 'world!'];
```

To find length of the array you simply 'length' it:

```js

var array = ['1', 2, 3.14];

array.length === 3;
```

To change the value of the item in the array you simply assign value to it. Like with variable:

```js
var words = ['Hello','world','!'];
words[1] = 	'Alice'; //Assigning value of string 'Alice' to element 1 in array of words.

words === 	['Hello','Alice','!'];
```

To remove item from the array you need to splice it:

`Array.splice(index, how many to remove after index)`

```js
var array = ['1', 2, 3.14]
//            remove 1
array.splice(0, 1);
//   start index
```

### Objects

Objects are key-value data structures. You give it a key, it gives you the value. Real world example could be your self: eye_colour(key) - green(value), hair_colour - blond, height - 192cm... etc. 

Accessing objects done the same way as array, except instead of index you give it a key. Accessing can be done three ways:

 - Array style - `object['key'] === 'value'` - If key does not exist, will return `undefined`
 - Static style(Hard-coded method) - `object.key === 'value'` - If key does not exist, will return error. Use this style only if you are sure that key exists.

```js
var me = {
	eye_colour:		'green',
	hair_colour:	'blond',
	height:			192
}

me['eye_colour']	=== 	'green';

object.hair_colour	=== 	'blond';

object['height']	=== 	192;

```

Creating and modifying key done same way as array, except, again, instead of index, you use key.

```js
var car = {};

car['colour'] = 'red';

car.weight = 687;
```

### Functions

Functions are like toaster. You put piece of bread into the toaster, it toast it, and gives you toast. Same for functions. You give a function information, it process it, and returns you the value. 

In JS we initialize function with the magic word `function`. And we can do it two ways:

 - Classical way - `function hello(){ return 'world'; }`
 - OO(Object Orientated way) - `var hello = function(){ return 'world';}`

They way you call functions is by simply adding round bracket on the end of the name.

```js
var hello = function(){ 
	return 'world';
}
hello() === 'world';
```

Functions can take arguments(parameters): 

```js
var SayHelloTo = function(name){
	return 'Hello ' + name + '!';
}
```

So now we have `function` with `1` argument called `name`. We can access argument same way as variable.

Now we can run function with argument.

```js
SayHelloTo('Martin') === 'Hello Martin!';
```

Note: All arguments **MUST** be entered, and they **MUST** be entered in the same sequence as defined in the function. Example:

```js
var me = function(name, height){
	return 'My name is ' + name + '. My height is ' + height + 'cm.';
}

me(192, 'Yuriy') === 'My name is 192. My height is Yuriycm.'; //Not good!

me('Yuriy', 192) === 'My name is Yuriy. My height is 192cm.'; //Thats right!
```

It this course I will be mainly using Object Orientated way. Reasoning for that I will explain further through.

### Code style

Last couple things you need know before we start to practice is a code styling. In any programming language good code style is crucial to write good code, elegant code with less mistakes.

 - **SEMICOLON EVERYTHING!** - it is the most critical rule that you **MUST** learn. You must put semicolon at the end of every line, unless you have situation when do not need to. This rule is so important because JavaScript trying to be nice and put semicolon after every line while interpreting it. Example of that behavior: 
 
```js
var me = function(){
	return {
		name: 'Yuriy'
	}
}
me() === { name: 'Yuriy' }; //All good

var me = function(){
	return 
	{
		name: 'Yuriy'
	}
}
me() === undefined; // :-( Oops,
```

 - **Spacing/Tabbing** - it is way easier to understand code, when it is beautifully spaced:
```js
var hello = function(name){return 'Hello ' + name + '!';}

//VS

var hello = function(name){
	return 'Hello ' + name + '!';
}
```

 - **Quotes** - there constant arguments what is better to use: single quotes(') or Double quote("). It is up to you to decide which quotes to use, but if you do, use them only. Do not mix them up, or your code will become hell to understand.
```js
var bad = function(name){
	return 'Hello ' + name + "!";
}

var good = function(name){
	return 'Hello ' + name + '!';
}
//OR
var good = function(name){
	return "Hello " + name + "!";
}
```


 - **Comment like you on Youtube** - comment code. Explain what it does.
```js
code here... //Single line comment But not here...

code here.. /*Enclosed single line comment*/ ...and here 

/* 
* Multiple
* line
* comment
*/
```

```js
/*
* Written by Yuriy
*/
var sayHelloTo = function(name){ //Says hello to {name}
	return "Hello " + /* I am inside the code*/ name + "!" ;
}
```

 - **Adequate variable name** - variable name must describe what inside:

```js
//BAD - never do this
var varible1 = 42;
var varible2 = 'hello';
var varible3 = 'world';

//GOOD
var shopping_list = ['butter', 'bread', 'wittakers'];
var name = 'Bob';
var money = 29;

//..etc
``` 