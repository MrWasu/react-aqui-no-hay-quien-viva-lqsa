import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    const { pathname, search } = useLocation( ) //apuntes junto con lo de login page
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath)

    return (logged) // si esta autenticado, condicion
        ? children
        : <Navigate to="/login" />
}