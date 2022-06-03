const formData = {
    userData: [{}]
}
export const formReducer = (state = formData, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userData: [
                    ...state.userData,
                    {
                        username: action.username,
                        gmail: action.gmail,
                        password: action.password
                    }
                ]
            }
        default:
            return state
    }
}