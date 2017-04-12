 const products = (state=[], action) => {
   switch (action.type) {
     case 'DELETE':
       return state.filter(item => item.key !== action.key);
      case 'DELETEALL':
      return []
     default:
       return state
   }
 }
   export default products
