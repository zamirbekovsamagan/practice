const formData = {
    userData:[],
    showForm:true
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
        case 'SHOW-FORM':
            return{
                ...state,
                showForm: !state.showForm
            }
        default:
            return state
    }
}