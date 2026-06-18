# Typescript

<details>
<summary>Index</summary>

## Index

- Introduction
- Typescript Data Types

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- TypeScript is a programming language built on top of JavaScript that adds static typing.
- TypeScript = JavaScript + Types
- TypeScript is a statically typed programming language.

![Typescript](assets/01-typescript.png)

### Uses

- TypeScript provides features like types, interfaces, and generics to catch errors while writing code.
- TypeScript checks for errors during compilation.

### Compilation

- We cannot run TypeScript code directly.
- TypeScript is a development-time language. Before running the code, TypeScript (.ts) must be converted into JavaScript (.js).
  ![Compilation Erros](assets/02-compilation-errors.png)

```terminal
tsc index.ts
```

</details>

---

<details>
<summary>Typescript Data Types</summary>

## Typescript Data Types

### Variables

- Syntax :

```ts
let variableName: type = value;
```

- Example :

```ts
let age: number = 20;
// age = "twenty";  // Error

age = 27; // No Error
console.log(age); // 27
```

### Primitive Datatypes

1. string
2. number
3. boolean
4. null
5. Undefined
6. any
7. unknown
8. never

```ts
// String
let myName: string = 'Ande Praveen';

// number
let myAge: number = 28;

// boolean
let isMale: boolean = true;

// null -> represents an intentionally empty value
let test: null = null;

// undefined
let abc: undefined = undefined;

// any -> we can assign anything like Javascript -> avoid the type checking
let a: any = 'Text';
a = 10;
a = true;
a = null;
a = undefined;

// unknown
let b: unknown;
console.log(typeof b);

// never ->  used for functions that never return a value
function throwError(): never {
	throw new Error('Something went wrong');
}
```

#### **any** vs **unknown**

- `any` type skips the type checking. it stores any value.
- `unknown` type checks the type checking before stores any value.

```ts
let a: any = 29;
// a.toUpperCase(); // Runtime Error

let b: unknown = 29;
// b.toUpperCase(); // Error

if (typeof b === 'string') {
	b.toUpperCase(); // Safe
}
```

</details>

---
