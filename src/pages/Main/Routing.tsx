import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Home } from './Home';
import { FullLayout } from '../../components/FullLayout';

export const MainRouting = () => {
    return (
        <FullLayout>
            <Routes>
                <Route
                    index
                    element={<Navigate to={ROUTES.MAIN.INDEX} replace />}
                />
                <Route path={ROUTES.MAIN.INDEX} element={<Home/>}></Route>
            </Routes>
        </FullLayout>
    )
}