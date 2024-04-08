import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '../../contexts/theme';
import { useContext } from 'react';


const Footer = () => {
  const {theme} = useContext(ThemeContext);
  
  
  return (
    <footer className={classNames(
        styles.footer,
        { // condition      
          [styles.dark]: theme === 'dark',
        }
    )}>
        <div className="container">
            <div className={styles.rights}>
            Все права защищены
            </div>
        </div>
    </footer>
  )
}

export default Footer