import React from 'react';
import { Component } from 'react';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import createBrowserHistory from "history/createBrowserHistory";
import { About } from './components/About';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Contacts } from './components/Contacts';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Product } from './components/Product';
import { createStore } from 'redux';
import { connect } from 'react-redux';
 

export const phpShopApiUrl = 'http://php-shop-api.localhost';

//const history = createBrowserHistory();

/*const initialState = {
  name: 'Paul',
  secondName: 'Petrov'
}

function reducer(state = initialState,action) {
  switch (action.type) {
    case 'CHANGE_NAME': return { ...state, name: action.payLoad } ;
    case 'CHANGE_SECOND_NAME': return { ...state, secondName: action.payLoad } ;
  }
  return state;
}

const store = createStore(reducer, initialState);

console.log(store.getState());

const changeName = {
  type: 'CHANGE_NAME',
  payLoad: 'Ivan'
};

const changeSecondName = {
  type: 'CHANGE_SECOND_NAME',
  payLoad: 'Ivanov'
};

store.dispatch(changeName);
console.log(store.getState());
store.dispatch(changeSecondName);
console.log(store.getState());
*/







export class App extends React.Component {
  render() {
    return (
      <div className="app">
      <div className="container">
        <Header/>
        <Navigation/>  
        <Footer/>      
      </div>     
      </div>
    )
  }
}



export default App;