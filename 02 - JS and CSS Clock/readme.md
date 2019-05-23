* A *method* cannot be passed as a parameter in JS:
```javascript
    (arg, methodName) => {
        const whatever = calc(arg);
        whatever.methodName(); // <-- This won't work.
    }
```

*Reminder:*
* You can directly modify a CSS attribute:
```javascript
    const selector = document.querySelector('class|id|tag'); 
    selector.style.cssAttribute = `value`;
    // e.g: hand('second').style.transform = `rotate(${...}deg)`;

```