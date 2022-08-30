import styles from './Footer.module.css'
import github from '../../assets/github-white.svg'
import linkedin from '../../assets/linkedin-white.svg'

function Footer(){  
    return(
        <footer className={styles.footer}>
            <div className={styles.email}>
                <span>Email: gustavodasilvadias496@gmail.com</span>
            </div>
            <div className={styles.sociais}>
                <a href="https://github.com/GustavoDias496" target="_blank" rel="noreferrer"><img src={github} alt="icone-github" /></a>
                <a href="https://www.linkedin.com/in/gustavo-da-silva-dias-27a479237/" target="_blank" rel="noreferrer"><img src={linkedin} alt="icone-linkedin" /></a>
            </div>
        </footer>
    )
}

export default Footer