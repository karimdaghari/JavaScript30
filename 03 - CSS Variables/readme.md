* The difference between a NodeList and an Array object ? The methods available.
* [Short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation):
```javascript
    const suffix = this.dataset.sizing || ' ';
    // The first non-falsy value is returned. If all values are falsy, the last one is returned.
```
* ```Document.documentElement``` returns the ```Element``` that is the root element of the document.
```javascript
    document.documentElement;
    // Always returns <html>. 
    // See https://devdocs.io/dom/document/documentelement#Notes
```
