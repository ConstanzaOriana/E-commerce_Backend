import './App.css';
import { useState, useEffect } from "react";
import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/category_product';

function App() {

  const [categories, setCategories] = useState({errorMessage: "", data: []});
  const [products, setProducts] = useState({errorMessage: "", data: []});

  useEffect(() => {
    const fetchData = async () => {      
    const responseObject = await getCategories();
    setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {      
      const responseObject = await getProducts(id);
      setProducts(responseObject);
      }
      fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(i => (
      <Category key={i.id} id={i.id} title={i.title} onCategoryClick={() => handleCategoryClick(i.id)}/>
    ))
  }

  const renderProducts = () => {
    return products.data.map( p => 
      <CategoryProduct {...p}>{p.title}</CategoryProduct>
    )
  }

  return (
    <>
    <header>Header</header>
    <section>
      <nav>
      {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
      {categories.data && renderCategories()}
      </nav>
      <article>
        {products.errorMessage && <div>Error : {products.errorMessage}</div>}
        <h1>Products</h1>
        {products && renderProducts()}
      </article>
    </section>
    <footer>Footer</footer>
    </>
  );
}

export default App;
