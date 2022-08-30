import NavBar from "../../components/navbar/Navbar"
import ProductFormEdit from "../../components/ProductFormEdit/ProductFormEdit"
import styles from './EditarProduto.module.css'
import Footer from "../../components/Footer/Footer"

function EditProduto(){ 
    return(
        <div>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Editar de Produtos</h1>
                </div>
                <ProductFormEdit btnText='Editar Produto'/>
            </div>
            <Footer/>
        </div>
    )
}

export default EditProduto