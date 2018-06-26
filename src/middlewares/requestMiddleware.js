export const requestMiddleware = (store) => (next) => (action) => {
    if (action.request) {
        return action.request
        .then(res => res.json())
        .then(res => next({
            type: action.type,
            payload: res
        }))
    }
    next(action)
}

