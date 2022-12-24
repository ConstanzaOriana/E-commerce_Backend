import React from 'react';
import "./index.css";

const CategoryProduct = ({title, image, features, price, stock}) => {
    console.log(window.location.pathname+window.location.search);
    console.log(window.location.href);
  return (
    <>
    <article className='article-container'>
        <div className='article-title'>{title}</div>
        <figure>
            <div className="article-image-container">
                <img src={`./assets/${image}`} alt={title} className="article-image"></img>
            </div>
        </figure>
        <aside>
            <div>
                <h3 className='article-features'>Features</h3>
                <ul>
                    {features?.map((f) => {
                        <li>{f}</li>
                    })}
                </ul>
            </div>
        </aside>
        <aside>
            <div className='article-price'>USD{price}</div>
            <div>
                <label className='article-stock'>Stock level: {stock}</label>
            </div>
            <button className='view-product'>View Product</button>
            <button className='add-to-basket'>Add to Basket</button>
        </aside>
    </article>
    </>
  )
}

export default CategoryProduct;