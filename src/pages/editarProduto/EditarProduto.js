import NavBar from "../../components/navbar/Navbar"
import ProductFormEdit from "../../components/ProductFormEdit/ProductFormEdit"
import styles from './EditarProduto.module.css'


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
        </div>
    )
}

export default EditProduto