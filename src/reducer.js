export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //Add to basket case
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); //splice helps create a new array without the item removed from the basket by rending the state of the basket ...state.basket and the action on the item action.item
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    //Remove from basket case
    /*case "REMOVE_FROM_BASKET":
    //Assuming the products share the same id
    return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id),
      };*/

    default:
      return state;
  }
};

export default reducer;
