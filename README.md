# TypeScript Runtime Error with Type Safety

This example demonstrates how a type-safe TypeScript function can still throw a runtime error if the actual values passed at runtime don't match the declared types.

The function `add` is declared to accept two numbers and return a number. However, the code calls `add` with two strings.  TypeScript's type system catches this at compile time *if* type checking is enforced. However, if it is not, or if dynamic values from somewhere else are used, a runtime error will occur.  This illustrates the importance of runtime checks or comprehensive type validation for robust applications.

## How to Reproduce

1. Save the code in `bug.ts`.
2. Compile and run the code using a TypeScript compiler (tsc) and Node.js (or similar).
3. Observe the runtime error.