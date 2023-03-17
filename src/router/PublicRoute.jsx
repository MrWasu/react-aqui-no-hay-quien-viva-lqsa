import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    return (logged == false)
        ? children
        : <Navigate to="/aqnhqv" />
} 
// hace que si no estamos logueados vayamos a login (children),
// pero si lo estamos vamos otra pagina normal, 
// y no podemos entrar en el login



