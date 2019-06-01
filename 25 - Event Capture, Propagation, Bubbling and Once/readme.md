* To stop bubbling/propagation:
  ```javascript
  Event.stopPropagation()
  ```
* The method `addEventListener` has 3 parameters:
  1. The event to listen to,
  2. The callback function,
  3. **The options object**
* The options object has two attributes:
  * `capture`: `true|false`, it sets the order of traversal of the tree.
    * `true`: top to bottom,
    * `false`: bottom to top (default)
  * `once`: `true|false`, it executes the event listener then immediately unbinds it.