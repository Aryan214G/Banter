import styles from "./HomePage.module.css"
import Navbar from "../Components/layout/navbar.jsx";
const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Navbar/>
        </div>
    );
};

export default HomePage;