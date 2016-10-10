# Deep finger

## How to use it

```javascript
// Import deep finger's class
import DeepFinger from 'deep-finger';
// Create a DeepFinger instance
const instance = new DeepFinger();
// Give the instance the informations about keyboard inputs
document.addEventListener('keyup', instance.keyUpListener.bind(instance), true);
document.addEventListener('keydown', instance.keyDownListener.bind(instance), true);
// Start learning
instance.learn();
// Type some informations...
deepFinger.status(); // {state: 'learn', progress: [0..1], ...}
// Switch to verifying state
instance.verify();
// Give the informations about the current user
deepFinger.status(); // {state: 'verify', validity: [0..1], ...}
```

## How it works

1. Keyboard event [up/down]
```javascript
{type: 'keyup|keydown', keyCode: <integer>, timeStamp: <real>}
```
2. Convert an array of events to a sequence 
```javascript
// input
[{type: 'keyup|keydown', keyCode: <integer>, timeStamp: <real>}, ...]
// output
[
  [
    {type: 'keydown', keyCode: <integer>, timeStamp: 0},
    {type: 'keyup', keyCode: <integer>, timeStamp: 1.2},
    {type: 'keydown', keyCode: <integer>, timeStamp: 1.5},
    {type: 'keyup', keyCode: <integer>, timeStamp: 1.9},
    ...
  ],
  ...
]
```
3. To continue...
