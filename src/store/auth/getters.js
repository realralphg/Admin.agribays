export function loggedIn ( state ) {
    return !!state.token
}

export function users (state) { return state.users }

export function orders (state) { return state.orders }

export function products (state) { return state.products }

export function plans (state) { return state.plans }

export function tags (state) { return state.tags }