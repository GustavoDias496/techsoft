import { Link } from 'react-router-dom'
 
function NavBar(){  
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/Home">PÁGINA INICIAL</Link>
                </li>
                <li>
                    <Link to="/CadastroProduto">NOVO PRODUTO</Link>
                </li>
                <li>
                    <Link to="/ListarProdutos">LISTAR PRODUTOS</Link>
                </li>   
            </ul> 
        </nav>
    )
}

export default NavBar