export default function (state={}, action) {
    switch (action.type) {
        case "PROPERTY_SELECTED":
            return action.payload;
            break;
    }
    return state;
}