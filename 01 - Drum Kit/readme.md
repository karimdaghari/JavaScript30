* The HTML5 attribute ` data-{whatever}` is for creating user-defined attributes.
  * Relevant bit: 
  ```html
  <div data-key="65" ...>
      ...
  </div> 
  ```

* The `<kbd>` element: denotates a user keyboard input.
  * Relevant bit:
  ```html
  <kbd> ... </kbd>
  ```

* The `transitionend` event listener: it is fired when a CSS transition has completed.

* The `classList` property.
  ```javascript
    selector.classList.add(className); // Adds className to selector.
    selector.classList.remove(className); // removes className from selector.
    selector.classList.toggle(className); // Adds className to selector, if it's not present. Else, removes it.
  ```
  
* Learned more about handling the `<audio>` element in js:
  * Property:
  ```javascript
    audio.currentTime = [0 -> infinity]; // Updates the current playback time.
  ```
  * Method:
  ```javascript
    audio.play(); //Obvious.
  ```
  * More: [HTMLMediaElement](https://devdocs.io/dom/htmlmediaelement) 