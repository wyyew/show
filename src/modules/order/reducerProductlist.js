 const products = (state=[], action) => {
   switch (action.type) {
     case 'DELETE':
       return state.filter(item => item.id !== id);
     default:
       return state
   }
 }
   export default products
