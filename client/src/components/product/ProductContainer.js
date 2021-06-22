import React from 'react'
import ProductList from './ProductList'
import SearchBox from './SearchBox'

const ProductContainer = () => {
    return (
        <div>
           <SearchBox />
           <ProductList /> 
        </div>
    )
}

export default ProductContainer
