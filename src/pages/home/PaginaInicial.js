import NavBar from "../../components/navbar/Navbar"
import appicon from '../../assets/computericon.svg'
import editicon from '../../assets/editicon.svg'
import deleteicon from '../../assets/deleteicon.svg'
import styles from './PaginaInicial.module.css'

import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(){

    function deleteProduct(id) {
        axios.delete(`https://sifsoftapi.herokuapp.com/products/${id}`)

        setProducts(products.filter(product => product._id !== id))
    }

    const [products, setProducts] = useState([]) 

    useEffect(() => {
        axios.get('https://sifsoftapi.herokuapp.com/products')
        .then((response)=>{
            setProducts(response.data)
        })
        .catch(()=>{
            console.log('Deu tudo errado!')
        })
    }, [])

    products.sort(function(a,b){
        if(a.value > b.value){
            return -1
        }else{
            return true
        }
    })


    const productsFilteredByValue = products.slice(0, 3)
    
    const telaProducts = productsFilteredByValue.map(product =>{
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

    return(
        <div >
            <NavBar/>
            <div className={styles.bestProducts}>
                <span>Produtos mais caros</span>
            </div>
            <div className={styles.cardContainer}>
                {telaProducts}
            </div>
            
        </div>
    )
}

export default Home