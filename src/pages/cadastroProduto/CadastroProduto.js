import NavBar from "../../components/navbar/Navbar"
import ProductForm from "../../components/ProductForm/ProductForm"
import styles from './CadastroProduto.module.css'
import Footer from "../../components/Footer/Footer"
function CadastroProduto(){


    return(
        <div>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Cadastro de Produtos</h1>
                </div>
                <ProductForm btnText='Cadastrar Produto'/>
            </div>
            <Footer/>
        </div>
    )
} 

export default CadastroProduto 