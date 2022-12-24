import React from 'react'

const CategoryProduct = ({title, image, features, price, stock}) => {
  return (
    <>
    <article>
        <div>{title}</div>
        <figure>
            <div>
                <img src={`./assets/${image}`} alt={title}></img>
            </div>
        </figure>
        <aside>
            <div>
                <h3>Features</h3>
                <ul>
                    {features?.map((f) => {
                        <li>{f}</li>
                    })}
                </ul>
            </div>
        </aside>
        <aside>
            <div>&pound;{price}</div>
            <div>
                <label>Stock level: {stock}</label>
            </div>
            <button>View Product</button>
            <button>Add to Basket</button>
        </aside>
    </article>
    </>
  )
}

export default CategoryProduct;