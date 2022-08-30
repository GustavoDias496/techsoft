import NavBar from "../../components/navbar/Navbar"
import axios from 'axios'
import { useState, useEffect} from 'react'

function ListarProdutos(){

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

    return(
        <div >
            <NavBar/>
            <p>Listar Produtos</p>

            {products.map((product, key) =>{
                return(
                    <div>
                        <p>{product.productName}</p>
                        <p>{product.productCode}</p>
                        <p>{product.amountSales}</p>
                        <p>{product.description}</p>
                        <p>{product.value}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default ListarProdutos