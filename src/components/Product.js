import React from 'react';
import {
  phpShopApiUrl
}
from '../App';
import {
  Sidebar
}
from './Sidebar';
export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10),
      product: []
    }
  }
  componentDidMount() {
    fetch(phpShopApiUrl + '/api/product/' + this.state.id).then(res => res.json()).then(res => {
      this.setState({
        product: res
      });
    }).catch(error => console.log(error));
  }
  render() {
    return ( < div > < div className = "row" > < div className = "col-3" > < Sidebar / > < /div> < div className = "col-9" > < div className = "page" > < h1 > Каталог < /h1>     < div className = "catalog-page" > < div className = "product-list" > < div className = "row" > {
      this.state.product.map(function(product, idx) {
        let productLink = '/product/' + product.id;
        let productImage = '/images/' + product.image;
        return ( 
          <div className = "col-12" > 
          <div className = "product-item" >
           <div className = "product-border" >
         <div className = "product-item-image" > <img src = { productImage  }
          alt = "" / > </div>
           <div className = "product-item-title" > {    product.name    } </div>
            <div className = "product-item-descr" > {   product.content } </div> 
          <div className = "product-item-price" > { product.price }   p </div>
           <div className = "product-item-buy" >
            <a href = { productLink }  role = "button"className = "btn btn-primary" > Купить </a>
           </div> </div> </div> </div>
           )
      }.bind(this))
    } </div> </div> </div> </div> </div> </div> </div>);
  }
}
export default Product;