https://stephengrider.github.io/JSPlaygrounds/
```javascript
const reducer = (state = {}, action) => {
	if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_char') {
    return [...state, action.payload];
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = {
	type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);

store.getState();

const action2 = {
	type: 'add_char',
  payload: 'a'
};
store.dispatch(action2);
store.getState();
```
