export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    let total = basket?.reduce((amount, item) => item.price + amount, 0)
    return parseFloat(total?.toFixed(2))
}


function reducer(state, action) {
    console.log(action)
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            //LOGIC
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                //item in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it is nmot in basket`)
            }
            return {...state, basket: newBasket}
            
        default:
            return state;
    }
}

export default reducer;

/*const [{basket}, dispatch] = useStateValue();
cosnt addToBasket = () => {
    dipsatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price:price,
            rating:rating
        }
    })
}

*/