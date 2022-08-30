import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './ProductFormEdit.module.css'
import SubmitButton from '../Form/SubmitButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const validationProduct = yup.object().shape({
    productName: yup.string().required("O nome é obrigatório!").max(50, "O máximo de caracteres é 50"),
    value: yup.number().positive().required("O valor é obrigatório!"),
    amountSales: yup.number().positive().required("As vendas são obrigatórias!"),
    productCode: yup.string().required("O código é obrigatório!").max(50, "O máximo de caracteres é 50"),
    description: yup.string().required("A descrição é obrigatória!").max(300, "O máximo de caracteres é 300")
})

function ProductFormEdit({btnText}){

    const { id } = useParams()
    let navigate = useNavigate()


    const [data, setData] = useState({
        _id: id,
        productName: '',
        value: '',
        amountSales: '',
        productCode: '',
        description: ''
    })

    function handleOnChange(e){
        const newData={...data}
        newData[e.targe.name] = e.target.value
        setData(newData)
        console.log(newData)
    }

    const updateProduct = data => axios.put(`https://sifsoftapi.herokuapp.com/products/${id}`, data)
    .then(() =>{
        console.log("Deu tudo certo!")
        navigate('/')
    })
    .catch(() =>{
        console.log("Deu tudo errado!")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationProduct)
    })

    useEffect(() =>{
        axios.get(`https://sifsoftapi.herokuapp.com/products/${id}`)
        .then((response) =>{
            reset(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <form onSubmit={handleSubmit(updateProduct)} className={styles.form}>
            <div className={styles.formControl}>
                <label>Nome do produto:</label>
                <input onChange={(e)=>handleOnChange(e)} type="text" name="productName" {...register("productName")} placeholder="Nome"/>
                <p className='error-message'>{errors.productName?.message}</p>
            </div>
 
            <div className={styles.formControl}>
                <label>Valor do produto:</label>
                <input onChange={(e)=>handleOnChange(e)} type="number" name="value" {...register("value")} placeholder="Valor"/>
                <p className='error-message'>{errors.value?.message}</p>
            </div>

            <div className={styles.formControl}>
                <label>Total de vendas do produto:</label>
                <input onChange={(e)=>handleOnChange(e)} type="number" name="amountSales" {...register("amountSales")} placeholder="Venda total"/> 
                <p className='error-message'>{errors.amountSales?.message}</p> 
            </div>

            <div className={styles.formControl}>
                <label>Código do produto:</label>
                <input onChange={(e)=>handleOnChange(e)} type="text" name="productCode" {...register("productCode")} placeholder="Codigo"/> 
                <p className='error-message'>{errors.productCode?.message}</p>  
            </div>

            <div className={styles.formControl}>
                <label>Descrição do produto:</label>
                <input onChange={(e)=>handleOnChange(e)} type="text" name="description" {...register("description")} placeholder="Descricao"/> 
                <p className='error-message'>{errors.description?.message}</p>  
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProductFormEdit