## seState Hook

useState(10) creates a state variable count with initial value 10.
setCount is used to update the state and re-render the UI.

## Why not use a normal variable?

Updating a variable like count = count + 1 won't update the UI.
React only re-renders when state is updated using setState (setCount here).

## Event Handling

Buttons use onClick={increaseCounter} and onClick={decreaseCounter}.
Don't use parentheses (increaseCounter()) → will call function immediately.