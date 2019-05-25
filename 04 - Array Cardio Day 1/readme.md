* One-liner arrow functions have an implicit `return`.
* the `reduce` function:
```javascript
    Array.reduce((accumulator, current) => {
        ...
    }, initial);

    /* 
    if the `initial` variable is given, 
        1. It's value is assigned to `accumulator`
        2. `current` gets the array's first value (Array[0])
    else
        A bunch of unpredictable stuff could happen.
    Avoid the headaches: ALWAYS PUT AN `INITIAL` VALUE.
    */
```