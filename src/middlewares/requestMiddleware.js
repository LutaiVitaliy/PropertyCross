export const requestMiddleware = (store) => (next) => (action) => {
    if (action.request) {
        action.request
        .then(res => next({
            type: action.type,
            payload: res.json()
        }))
    }
    next(action)

}

