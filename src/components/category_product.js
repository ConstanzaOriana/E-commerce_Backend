import React from 'react';
import "./index.css";
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link, useNavigate } from 'react-router-dom';

const CategoryProduct = ({id, title, image, features, price, stock}) => {
const navigate = useNavigate();
const {addProduct} = useContext(CartContext);
    return (
    <>
    <article className='article-container'>
        <div className='article-title'><Link to={`products/${id}`}>{title}</Link></div>
        <figure>
            <div className="article-image-container">
                <img src={`./assets/${image}`} alt={title} className="article-image"></img>
            </div>
        </figure>
        <aside>
            <div>
                <h3 className='article-features'>Features</h3>
                <ul>
                    {features?.map((f, i) => {
                        return <li key={`feature${i}`}>{f}</li>
                    })}
                </ul>
            </div>
        </aside>
        <aside>
            <div className='article-price'>USD{price}</div>
            <div>
                <label className='article-stock'>Stock level: {stock}</label>
            </div>
            <button className='view-product' onClick={() => navigate(`products/${id}`)}>View Product</button>
            <button className='add-to-basket' onClick={() => addProduct({id, title, price})}>Add to Basket</button>
        </aside>
    </article>
    </>
  )
}

export default CategoryProduct;