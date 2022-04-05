
const initialState = {
    user_name: "",
    user_password: "",
    user_gmail: "",
    isLoggedIn: false,
    loading: false,
    user:null,
}

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user_password: action.payload.password,
                user_gmail: action.payload.gmail,             
            }
        case 'SIGN_UP':
            return {
                user_name:action.payload.name,
                user_password: action.payload.password,
                user_gmail: action.payload.gmail,
            }
        case 'ON_AUTH_STATE_CHANGED':
            console.log(action)
            return {
                ...state,
                user_gmail: action.payload.gmail,
                isLoggedIn:action.payload.state,
            }
        case 'ON_AUTH_STATE_CHANGED_LOG_OUT':
            return {
                ...state,
                isLoggedIn:false,
            }
        case 'SIGN_OUT':
            console.log(action)
            return {
                user_name: "",
                user_password: "",
                user_gmail: "",
            }
        case 'SET_USER':
                return {
                    user: action.newuser,
                }
        default:
            return state;
    }


}

export default AccountReducer;