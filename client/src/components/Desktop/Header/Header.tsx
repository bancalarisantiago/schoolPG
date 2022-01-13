import styles from './Header.module.css'
import { useState } from 'react'

function Header() {

    const [theme, setTheme] = useState('dark')
    
    return (
        <div className={`${styles.header} ${theme}`}>

            <div className={`${styles.container} ${theme}`}>
                <button onClick={() => theme==='light'?setTheme('dark'):setTheme('light')} 
                    className={`${styles.btn} ${theme}`}
                >
                    {theme==='light'?'dark':'light'}
                </button>
                <h3 className={`${styles.select} ${theme}`}>select</h3>
            </div>
        </div>

    )
}

export default Header
