const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            const newItems = { ...state.items };
            const product = action.payload;
            const id = product.id;

            if (!newItems.hasOwnProperty(id)) {
                newItems[id] = {
                    obj: product,
                    count: 1,
                    fullPrice: product.price
                };
            } else {
                newItems[id].count += 1;
                newItems[id].fullPrice += product.price;
            }

            const newTotalPrice = Object.values(newItems).reduce((acc, { fullPrice }) => {
                return acc += fullPrice;
            }, 0);

            const newTotalCount = Object.values(newItems).reduce((acc, { count }) => {
                return acc += count;
            }, 0);

            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount
            };
        }
// требует проверки
        case 'REMOVE_PRODUCT_FROM_CART': {
            const newItems = { ...state.items };
            const id = action.payload;
            const productFullPrice = newItems[id].fullPrice;
            const productCount = newItems[id].count;

            delete newItems[id];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - productFullPrice,
                totalCount: state.totalCount - productCount
            };
        }
// требует проверки
        case 'DECREASE_PRODUCT': {
            const newItems = { ...state.items };
            const id = action.payload;
            const productPrice = newItems[id].obj.price;

            newItems[id].count -= 1;
            newItems[id].fullPrice -= productPrice;

            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - productPrice
            };
        }
// требует проверки
        case 'INCREASE_PRODUCT': {
            const newItems = { ...state.items };
            const id = action.payload;
            const productPrice = newItems[id].obj.price;

            newItems[id].count += 1;
            newItems[id].fullPrice += productPrice;

            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + productPrice
            };
        }

        default:
            return state;
    }
};

export default cart;