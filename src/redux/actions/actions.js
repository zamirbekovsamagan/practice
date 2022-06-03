export const loginForm = ({username, gmail, password})=>({
    type:"LOGIN",
    username,gmail,password
})

export const showForm = ()=>({
    type:'SHOW-FORM'
})