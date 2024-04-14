import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '../../contexts/theme';
import { useContext } from 'react';
import { SIZES } from "../../constants/sizes";

const Button = ({children, onClick, disabled, classNameStyle,
  viewVariant = "primary",
  size = SIZES.m,
    }) => {

  const {theme}=useContext(ThemeContext);
      
  return (
    <button 
      className={classNames(
        styles.root,
        styles[viewVariant],
        styles[size],
        classNameStyle,
        { // condition
          [styles.disabled]: disabled,
          [styles.darkbutton]: theme === 'dark',
        }
      )}
        // className={` ${styles.root} ${styles.myButton}`} 
        onClick={onClick} 
        disabled={disabled}
    >
        {children}
    </button>
  )
};

export default Button;
