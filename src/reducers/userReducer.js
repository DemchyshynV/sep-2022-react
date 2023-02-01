const userActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const userActions = {
    ADD: (item) => ({type: userActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.DELETE_BY_ID, payload: id})
}

const initialUsers = () => []


const myUserReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0
            return [...state, {id, ...action.payload}]

        case userActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1)
            return [...state]
    }
}

export {
    userActions,
    myUserReducer,
    initialUsers
}
