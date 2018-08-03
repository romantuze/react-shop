import React from 'react';
import { Component } from 'react';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";




import { Home } from './Home';
import { About } from './About';
import { Catalog } from './Catalog';
import { Category } from './Category';
import { Product } from './Product';
import { Contacts } from './Contacts';
import { News } from './News';
import { NewsPost } from './NewsPost';
import { Forms } from './Forms';
import { Redux } from './Redux';

const history = createBrowserHistory();


 export class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
        <div className="mainmenu">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">Menu</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">Главная</Link>
              <Link to="/about" className="nav-item nav-link">О нас</Link>
              <Link to="/catalog" className="nav-item nav-link">Каталог</Link>
              <Link to="/news" className="nav-item nav-link">Новости</Link>
              <Link to="/contacts" className="nav-item nav-link">Контакты</Link>
            </div>
          </div>
        </nav>
        </div>
        <main className="main">        
          <div className="page">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/catalog" component={Catalog}/>
          <Route exact path="/catalog/category/:id" component={Category}/>
          <Route path='/product/:id' component={Product}/>
          <Route exact path='/news' component={News}/>
          <Route path='/news/:id' component={NewsPost}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/forms" component={Forms}/>
          <Route exact path="/redux" component={Redux}/>
          </div>         
       </main>
       </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;