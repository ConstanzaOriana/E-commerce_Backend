import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../fetcher';

const ProductDetails = () => {
    const [product, setProduct] = useState({errorMessage : '', data: {} });
    const {productId} = useParams();

useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getProductsById(productId);
        setProduct(responseObject);
    }
    fetchData();
}, [productId])

  return (
    <>
    <article className='article-container'>
        <div className='article-title'>{product.data.title}</div>
        <figure>
            <div className="article-image-container">
                <img src={`/assets/${product.data.image}`} alt={product.data.title} className="article-image"/>
            </div>
        </figure>
        <aside>
            <div>
                <h3 className='article-features'>Features</h3>
                <ul>
                    {product.data.features?.map((f, i) => {
                        return <li key={`feature${i}`}>{f}</li>
                    })}
                </ul>
            </div>
        </aside>
        <aside>
            <div className='article-price'>USD{product.data.price}</div>
            <div>
                <label className='article-stock'>Stock level: {product.data.stock}</label>
            </div>

            <button className='add-to-basket'>Add to Basket</button>
        </aside>
    </article>
    </>
  )
}

export default ProductDetails;