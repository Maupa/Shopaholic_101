# JavaScript crash course.

This part will be rather short. We will be covering JavaScripts history and basics of writing code on it.

## What is JavaScript?

JavaScript is a dialect of EcmaScript. It is dynamic prototype scripting language that generally use for browser scripting, but also can be used for server side(NodeJS, io.js). Most famous JavaScript engines are V8(Google), SpiderMonkey(Mozilla/Firefox) and Rhino(Mozilla).

## History

**Brendan Eich**
JavaScript was developed in 1995 by Brendon Eich while he was working in Netscape(now Mozilla Foundation). Original name was LiveScript, but since in those days word ```Java``` were really popular, he decided to call it JavaScript. In 1997 Ecma International(till 1994 European Computer Manufacturers Association - **ECMA**) with support from Netscape delivered official standardized specification of JavaScript, that called ECMAScript.

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


# JSON - The Internet Driver.

In this section we will discover new technology called ```JSON```, find out where it's been used, and write our own JSON data file.

## What is it?

JSON stands for JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. [From Wikipedia]

Simple example:
```javascript
{
    "hello":"world"
}
```

## Where it's been used?

Well... It easier to answer where it is not been used. JSON is second most used data transmit format after XML. 