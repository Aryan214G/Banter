import LoginSignup from "../Components/login/loginSignup.jsx";
import styles from "./AuthPage.module.css";
import AuthHeader from "../Components/login/AuthHeader.jsx";
const AuthPage = () => {
    return (
        <div className={styles.authPage}>
            <AuthHeader />
            <LoginSignup />
        </div>
    );
};

export default AuthPage;