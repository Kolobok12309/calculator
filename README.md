# Svelte-calculator

## Design

Icon design [figma](https://www.figma.com/community/file/1010216100117517862).

Calculator design [figma](https://www.figma.com/community/file/1009473038632462536).

Design authored by [Vatani Design](https://www.figma.com/@vatani) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

---


## Logic

Code of main logic in [src/logic](https://github.com/Kolobok12309/calculator/tree/master/src/logic).

Calculator parse `String` for numbers(`[-+])?\\d+(?:[,.]\\d+)?`), brackets(`[()]`) and operator tokens(based on operators of calculator).

Brackets add `priority` to operators in this brackets.

During parsing can be added `Mul` operators or set sign of numbers.

---

## Try it

[Demo](https://kolobok12309.github.io/calculator/)

`window.calc` is instance of `Calculator` with default options.

`window.Calculator` is `Calculator`.

---

## Tests

For test math logic, tests written in jest.

## Local app

To start local app run:
```
yarn
yarn dev
```
