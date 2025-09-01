import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Home } from './Home';
import { FullLayout } from '../../components/FullLayout';

export const MainRouting = () => {
    return (
        <FullLayout>
            <Routes>
                <Route path={ROUTES.MAIN.INDEX} element={<Home/>}></Route>
                <Route
                    path="*"
                    element={<Navigate to={ROUTES.MAIN.INDEX} replace />}
                />
            </Routes>
        </FullLayout>
    )
}