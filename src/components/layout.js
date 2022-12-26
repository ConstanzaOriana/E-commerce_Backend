import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = ({categories}) => {
    const renderCategories = () => {
        return categories.data.map(i => (
          <li key={i.id}><Link to={`/categories/${i.id}`}>{i.title}</Link></li>
        ))
      }
  return (
    <>
    <header><h1 className='title'>GEEK GAMERS</h1><h2 className='subtitle'>Marketplace</h2></header>
    <section>
      <nav>
      {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
      <ul>
      {categories.data && renderCategories()}
      </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </section>
    <footer className='footer'><Link to={"/"}>Home</Link> | <Link to={"/basket"}>Basket</Link></footer>
    </>
  )
}

export default Layout