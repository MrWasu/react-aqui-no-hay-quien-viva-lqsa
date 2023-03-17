import { Route, Routes } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import CharactersRoutes from '../characters/routes/CharactersRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
        <>
            <Routes>

                <Route path="login" element={

                    <PublicRoute>

                        <LoginPage />

                    </PublicRoute>
                } />

                <Route path="/*" element={

                    <PrivateRoute>

                        <CharactersRoutes />

                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}