* `this`'s value is not the same in a *regular* function as in an *arrow* function:
  * inside a **regular** function: it refers to whatever `this` value the function is called upon
    ```javascript
    function toggleOpen() {
      this.classList.toggle('open'); // Here `this` refers to `panel`
      setTimeout(() => this.classList.toggle('open-active'), 900);
    };

    panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
    ```
  * inside an **arrow** function: it refers to the *global* `this`