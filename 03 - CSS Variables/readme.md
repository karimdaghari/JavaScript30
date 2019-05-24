* CSS Variables:
  * Declaration: `--varName: value;`
  ```CSS
    /* GLOBAL variables (because of :root) */
    :root { /* <-- refers to the HTML doc */
       --spacing: 10px; /* variable declaration and assignment */
      --blur: 10px; /* You HAVE to assign it a value */
    }
  ```
  * Usage: `var(--varName);`
  ```CSS 
    img {
        background: var(--base);
        padding: var(--spacing);
        filter: blur(var(--blur));
        }
  ```
* The difference between a `NodeList` and an `Array` object ? The methods available.
* [Short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation):
```javascript
    const suffix = this.dataset.sizing || ' ';
    // The first non-falsy value is returned. 
    // If all values are falsy, the last one is returned.
```
* `Document.documentElement` returns the `<html>` element. [Note](https://devdocs.io/dom/document/documentelement#Notes)
```javascript
    document.documentElement;
```
