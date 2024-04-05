import { useContext } from 'react';
import  styles from './styles.module.scss';
import Button from '../button/button';
import { ThemeContextProviderComponent, ThemeContext } from '../../contexts/theme';
import classNames from 'classnames';
import { UserContextProviderComponent, UserContext } from '../../contexts/user';


const Header = () => {
    
    const {theme, setTheme}=useContext(ThemeContext);
    const {user,setUser}=useContext(UserContext);

    const changeTheme=()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    const changeLog=()=>{
        setUser(user==="noAuth" ? "auth" : "noAuth");
    }

    return (
    <header className={classNames(
        styles.header,
        {
            [styles.dark]: theme === 'dark'
        }
    )}>
        
            <nav className={styles.menu}>
                <ul className={styles.menulist}>
                    <li className={styles.menuitem}>
                        <ThemeContextProviderComponent>
                            <Button
                                onClick={changeTheme}
                            >
                                {theme}
                            </Button>
                        </ThemeContextProviderComponent>
                    </li>
                    <li className={styles.menuitem}>
                        <a href="">Why we?</a>
                    </li>
                    <li className={styles.menuitem}>
                        <a href="">Restaurants</a>
                    </li>
                    <li className={styles.menuitem}>
                        <a href="">Order</a>
                    </li>
                    <li className={styles.menuitem}>
                        <UserContextProviderComponent>
                            {user=== "auth" && <p className={styles.username}>Vlad</p>}
                            <Button
                            className={styles.userbtn}
                                onClick={changeLog}
                            >
                                {user === "noAuth" ? 'Log in' : 'Log out'}
                            </Button>

                        </UserContextProviderComponent>
                    </li>
                </ul>
            </nav>
            
     
    </header>
  )
}

export default Header