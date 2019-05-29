* Pass by value: a **copy** of the object is passed.
* Pass by reference: the object **itself** is passed.
* JS is pass by value for the most part, except for `Object`:
  * the `Object` **itself** is passed by value.
  * the `Object`'s attribute/property is passed by **reference**.
* Keep in mind the temporal aspect:
```javascript
    // t = n
    let a = 1;
    let b = a; // b: 1

    // t = n + 1
    a = 2;
    // b: 1
```