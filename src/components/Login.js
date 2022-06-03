import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showForm } from "../redux/actions/actions"
import classes from './Login.module.css'

const Login = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const backToHome = ()=>{
        navigate('/')
        dispatch(showForm())
    }
    return (
        <div className={classes.block}>
        <h1>Login Page</h1>
        <button onClick={backToHome}>Back</button>
        </div>
    )
}

export default Login