import './App.css';
import { useState, useEffect } from "react";
import Category from './components/Category';
import { fetcher } from './fetcher';

function App() {

  const [categories, setCategories] = useState({errorMessage: "", data: []});
  const [products, setProducts] = useState({errorMessage: "", data: []});

  useEffect(() => {
    const fetchData = async () => {      
    const responseObject = await fetcher("/categories");
    setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {      
      const responseObject = await fetcher("/products?catId=" + id);
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
    return products.map( p => 
      <div>{p.title}</div>
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
