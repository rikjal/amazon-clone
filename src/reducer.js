export const initialState = {
    basket: ['Qureshi', 'Red'],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic to add to basket
            break;
        case 'REMOVE_FROM_BASKET':
            break;
        default:
            return state;
    }
}
export default reducer;