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
 - Integer - 64bit number from. Example: 1, 2, 42, -275 etc.
 - Float - Like integer, but can hold decimal numbers. Example: 3.14159265359...
 
They called `atom`s because they are the most basic types in the language.
In JS you must initialize variable. To do this you simply place `var` before varible.

```js
var x = 'hello'; //Defining variable x with string value 'hello'

x = 'alice'; //Assigning string 'alice'

x = 42; //Assigning integer

x = 3.14 //Assigning float 

```

### Arrays and Objects
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

```js
var object = {
	key: 'Value',
	hello: 'world!',
	answer: 42
}

object['key'] === 'Value';

object['hello'] === 'world';

object['answer'] === 42;

```

### Functions

