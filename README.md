# @fvilers/is-date

A TypeScript type guard that validates if the given value is a Date

## Installation

```
npm install @fvilers/is-date
```

or

```
yarn add @fvilers/is-date
```

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

## Usage

```ts
import isDate from "@fvilers/is-date";

const variable: any = new Date("December 17, 1995 03:24:00");

if (isDate(variable)) {
  // From here, variable is strongly typed as a string
  console.log("Variable is a date set to", variable);
} else {
  console.log("Variable is not a date");
}
```

It will output:

```
Variable is a date set to Sun Dec 17 1995 03:24:00 GMT+0100 (Central European Standard Time)
```
