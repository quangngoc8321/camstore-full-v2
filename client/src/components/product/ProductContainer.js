import React, { useContext} from 'react'
import { useQuery } from 'react-query';
import { axiosFunction } from '../../helpers/axiosFunction';
import { MyQueryContext } from '../context/MyQueryContextProvider';
import ProductList from './ProductList'
import SearchBox from './SearchBox'

const ProductContainer = () => {
    const {query, setQuery}  = useContext(MyQueryContext);
     const { isLoading, data } = useQuery(["products", query], () => axiosFunction(null, null, "/products", "get",query),{
         staleTime: 100000
    } );

    const datas = data?.data.products || [];
    return (
        <div>
           <SearchBox query={query} setQuery={setQuery}/>
           <ProductList isLoading={isLoading} products={datas} query={query} setQuery={setQuery} data={data}/> 
        </div>
    )
}

export default ProductContainer
