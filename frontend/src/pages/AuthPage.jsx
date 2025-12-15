import LoginSignup from "../Components/login/loginSignup.jsx";
import "./AuthPage.css";
import AuthHeader from "../Components/login/AuthHeader.jsx";
const AuthPage = () => {
    return (
        <div className="auth-page">
            <AuthHeader />
            <LoginSignup />
        </div>
    );
};

export default AuthPage;