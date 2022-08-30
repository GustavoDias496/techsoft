import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


function NavBar(){  
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span>TechSoft</span>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className={styles.item} to="/Home">PÁGINA INICIAL</Link>
                    </li>
                    <li>
                        <Link className={styles.item} to="/CadastroProduto">NOVO PRODUTO</Link>
                    </li>
                    <li>
                        <Link className={styles.item} to="/ListarProdutos">LISTAR PRODUTOS</Link>
                    </li>   
                </ul> 
            </div>
            
        </nav>
    )
}

export default NavBar