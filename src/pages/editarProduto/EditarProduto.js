import NavBar from "../../components/navbar/Navbar"
import ProductForm from "../../components/ProductForm/ProductForm"
import styles from './EditarProduto.module.css'


function EditProduto(){
    return(
        <div>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Editar de Produtos</h1>
                </div>
                <ProductForm btnText='Editar Produto'/>
            </div>
        </div>
    )
}

export default EditProduto