import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './styles.module.scss';
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react";

const Layout = ({children}) => {
  const {theme}=useContext(ThemeContext);
 
  return (
    <div className={theme === 'dark' ? styles.dark : styles.light}>
        <Header/>    
        <div className={styles.layout}>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;