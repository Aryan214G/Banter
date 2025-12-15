import LoginSignup from "../Components/login/loginSignup.jsx";
import "./AuthPage.css";

const AuthPage = () => {
    return (
        <div className="auth-page">
            {/* <div className="header">Banter</div> */}
            <LoginSignup />
        </div>
    );
};

export default AuthPage;