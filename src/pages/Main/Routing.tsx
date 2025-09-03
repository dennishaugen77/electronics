import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Home } from './Home';
import { FullLayout } from '../../components/FullLayout';
import { Categories } from './Categories';
import { AboutUs } from './AboutUs';

export const MainRouting = () => {
    return (
        <FullLayout>
            <Routes>
                <Route path={ROUTES.MAIN.INDEX} element={<Home/>}></Route>
                <Route
                    path="*"
                    element={<Navigate to={ROUTES.MAIN.INDEX} replace />}
                />
                <Route path={ROUTES.MAIN.PRODUCT_CATEGORY.INDEX} element={<Categories/>}></Route>
                <Route path={ROUTES.MAIN.ABOUT_US.INDEX} element={<AboutUs/>}></Route>
            </Routes>
        </FullLayout>
    )
}