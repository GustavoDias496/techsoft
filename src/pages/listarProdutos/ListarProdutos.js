import NavBar from "../../components/navbar/Navbar"
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate"
import styles from './ListarProdutos.module.css'
import appicon from '../../assets/computericon.svg'
import editicon from '../../assets/editicon.svg'
import deleteicon from '../../assets/deleteicon.svg'
function ListarProdutos(){

    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] =useState(0)

    const productsPerPage = 2
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)

    const displayProducts = products.slice(pagesVisited, pagesVisited+ productsPerPage)
    .map(product =>{
        return(
            <div className={styles.card}>
                <img src={appicon} alt="icone aplicativo"/>
                <div className={styles.cardText}>
                    <span className={styles.text}>Nome: {product.productName}</span>
                    <span className={styles.text}>Código produto: {product.productCode}</span>
                    <span className={styles.text}>Valor: R$ {product.value}</span>
                    <span className={styles.text}>Total de vendas: {product.amountSales}</span>
                    <span className={styles.text}>Descrição: {product.description}</span>
                </div> 
                <div className={styles.cardOptions}>
                    <Link to={{ pathname:`/EditProduto/${product._id}` }}><img src={editicon} alt="icone aplicativo"/></Link> 
                    <img onClick={ () => deleteProduct(product._id) } src={deleteicon} alt="icone aplicativo"/>
                </div>
            </div> 
        )
    })


    useEffect(() => {
        axios.get('https://sifsoftapi.herokuapp.com/products')
        .then((response)=>{
            setProducts(response.data)
        })
        .catch(()=>{
            console.log('Deu tudo errado!')
        })
    }, [])

    function deleteProduct(id) {
        axios.delete(`https://sifsoftapi.herokuapp.com/products/${id}`)

        setProducts(products.filter(product => product._id !== id))
    }

    const changePage = ({ selected }) =>{
        setPageNumber(selected)
    }

    return(
        <div >
            <NavBar/>
            <div className={styles.title}>
                <p>Listar Produtos</p>
            </div>
            <div className={styles.cardContainer}>
                {displayProducts}
            </div>
            <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Próximo"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={styles.paginationButtons}
                    previousLinkClassName={styles.previusButton}
                    nextLinkClassName={styles.nextButton}
                    disabledClassName={styles.paginationDisabled}
                    activeClassName={styles.paginationActive}
                />
        </div>
    )
}

export default ListarProdutos