import { Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage.jsx";
import LandingPage from "../Pages/LandingPage.jsx";

const AuthRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    )
}

export default AuthRoute;