import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginForm, showForm } from "../redux/actions/actions";
import classes from './Form.module.css'

const initState = {
    username: '',
    usernameIsValid: true,
    gmail: '',
    gmailIsValid: true,
    password: '',
    passwordIsValid: true
}
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function reducer(prevState, action) {
    switch (action.type) {
        case 'USERNAME':
            return {
                ...prevState,
                username: action.username,
                usernameIsValid: /\d/.test(action.username)
            }
        case 'GMAIL':
            return {
                ...prevState,
                gmail: action.gmail,
                gmailIsValid: validEmailRegex.test(action.gmail)
            }
        case 'PASSWORD':
            return {
                ...prevState,
                password: action.password,
                passwordIsValid: action.password.trim().length > 5
            }
        default:
            return prevState
    }
}

const Form = () => {
    const dispatch = useDispatch()
    const user = useSelector(users => users)
    const [state, dispatchForm] = useReducer(reducer, initState)

    const navigate = useNavigate()

    function usernameChangeHandler(event) {
        dispatchForm({ type: 'USERNAME', username: event.target.value })
    }

    function gmailChangeHandler(event) {
        dispatchForm({ type: 'GMAIL', gmail: event.target.value })
    }

    function passwordChangeHandler(event) {
        dispatchForm({ type: 'PASSWORD', password: event.target.value })
    }

    let formIsvalid = /\d/.test(state.username) && validEmailRegex.test(state.gmail) && state.password.trim().length > 5

    function submitHandler(event) {
        event.preventDefault()
        const password = state.password.split('')
        const pass = password.reverse().join('').concat(password[0], password[1])
        const userData = {
            ...state,
            password: pass
        }
        dispatch(loginForm(userData))
        dispatch(showForm())
        navigate("/Login")
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div>
                <label>Username</label> 
                <input type='text' name="username" onChange={usernameChangeHandler} />
                {!state.usernameIsValid && <p>username must have digits</p>}
            </div>
            <div>
                <label>Gmail</label>
                <input type="email" name="gmail" onChange={gmailChangeHandler} />
                {!state.gmailIsValid && <p>gmail is not valid</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={passwordChangeHandler} />
            </div>
            <button disabled={!formIsvalid}>Login</button>
        </form>
    )
}

export default Form