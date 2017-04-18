export function increment() {
  return {type: 'INCREMENT'};
}
export function decrement() {
  return {type: 'DECREMENT'};
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState().counter;
    if(value % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
      setTimeout(() => {
        dispatch(increment());
      }, delay);
  }
}
