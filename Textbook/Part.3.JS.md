# JavaScript crash course.

This part will be rather short. We will be covering JavaScripts history and basics of writing code on it.

## What is JavaScript?

JavaScript is a dialect of EcmaScript. It is dynamic prototype scripting language that generally use for browser scripting, but also can be used for server side(NodeJS, io.js). Most famous JavaScript engines are V8(Google), SpiderMonkey(Mozilla/Firefox) and Rhino(Mozilla).

## History

JavaScript

## The code

### Variables and atoms
```js
var x = 'hello'; //Defining variable

x = 'alice'; //Assigning string 'alice'

x = 42; //Assigning integer

x = 3.14 //Assigning float 

```

### Arrays and Objects

```js
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

```

### Functions

