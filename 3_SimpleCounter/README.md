## useState Hook

useState(10) creates a state variable count with initial value 10.
setCount is used to update the state and re-render the UI.

## Why not use a normal variable?

Updating a variable like count = count + 1 won't update the UI.
React only re-renders when state is updated using setState (setCount here).

## Event Handling

Buttons use onClick={increaseCounter} and onClick={decreaseCounter}.
Don't use parentheses (increaseCounter()) → will call function immediately.

## Batch Processing in React

Suppose when you are using setCount consequently like

```jsx
let increaseCounter = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

What will be the visible output, 10 -> 11 or 14...Ofcourse 11 but why...
React batches state updates made in the same event loop, so multiple updates like:
```jsx
setCount(count + 1);
setCount(count + 1);
```
…all use the same stale value of count, so you only get one increment → 10 → 11.
But when you use the functional updater form:
```jsx
let increaseCounter = () => {
  setCount(preCount => preCount + 1);
  setCount(preCount => preCount + 1);
  setCount(preCount => preCount + 1);
  setCount(preCount => preCount + 1);
}
```
React guarantees each update receives the latest state, even inside the same batch.
So four updates give:
10 → 11
11 → 12
12 → 13
13 → 14