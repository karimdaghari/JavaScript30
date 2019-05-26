* `fetch()` **always** returns a promise/response.
* A shortcut to `JSON.parse(name)` is `name.json()`
* The spread operator `...`: *spreads* over an iterable object (i.e: string, array and object)
  ```javascript
    const arr1 = [1, 2, 3];
    
    function manipulateArray(arr) {
        // First impulse is to do this:
        for(let i = 0; i < arr.length; i++)
            process(arr[i]);
        
        // If you give it a bit more time:
        arr1.forEach(...);

        // However, if you're smart about it:
        [...arr].process(...);
    }
  ```
* The `innerHTML` property of an element let you to alter its html. 
* The `input` event: fires when an input is being modified