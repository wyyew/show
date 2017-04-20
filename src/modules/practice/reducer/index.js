const contReducer = (cont = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return cont + 1;
    case 'DECREMENT':
      return cont -1;
    default:
      return cont;
  }
}
export default contReducer;
