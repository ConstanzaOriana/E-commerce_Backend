import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Category from './components/Category';

function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCategories(data);
    })
  }, [])

  const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId=" + id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  }

  const renderCategories = () => {
    return categories.map(i => (
      <Category key={i.id} id={i.id} title={i.title} onCategoryClick={() => handleCategoryClick(i.id)}/>
    ))
  }

  const renderProducts = () => {
    return products.map( p => (
      <div>{p.title}</div>
    ))
  }


  return (
    <>
    <header>Header</header>
    <section>
      <nav>
      {categories && renderCategories()}
      </nav>
      <article>
        <h1>Products</h1>
        {products && renderProducts()}
      </article>
    </section>
    <footer>Footer</footer>
    </>
  );
}

export default App;
