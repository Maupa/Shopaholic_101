# JavaScript crash course.

This part will be rather short. We will be covering JavaScripts history and basics of writing code on it.

## What is JavaScript?

JavaScript is a dialect of EcmaScript. It is dynamic prototype scripting language that generally use for browser scripting, but also can be used for server side(NodeJS, io.js). Most famous JavaScript engines are V8(Google), SpiderMonkey(Mozilla/Firefox) and Rhino(Mozilla).

## History

**Brendan Eich**
JavaScript was developed in 1995 by Brendon Eich while he was working in Netscape(now Mozilla Foundation). Original name was LiveScript, but since in those days word ```Java``` were really popular, he decided to call it JavaScript. In 1997 Ecma International(till 1994 European Computer Manufacturers Association - **ECMA**) with support from Netscape delivered official standardized specification of JavaScript, that called ECMAScript.

![Brendan Eich](https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg)

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

object['key'] === 'Value';

object['hello'] === 'world';

object['answer'] === 42;


```

### Functions

