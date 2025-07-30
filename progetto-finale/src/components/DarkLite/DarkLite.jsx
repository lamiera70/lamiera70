import { useContext } from 'react';
import './DarkLite.css';
import { ThemeContext } from '../../context/ThemeContext';
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";

export default function DarkLite() {

    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

    return(
        <>
            <button onClick={() => {setIsDarkMode(!isDarkMode)}}>
                {isDarkMode ? (
                    <MdOutlineWbSunny style={{fontSize: '40px'}}/>
                ) : (
                    <MdOutlineDarkMode style={{fontSize: '40px'}}/>
                )}
            </button>
        </>
    );
}