import React from 'react';
import { phpShopApiUrl } from '../App';
import { Sidebar } from './Sidebar';



export class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id,10),
      products: []
    }
  }

  componentDidMount() {
    fetch(phpShopApiUrl+'/api/productscategoryall/'+this.state.id)
    .then(res => res.json())
    .then(res => { this.setState({products: res}) })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
  <div className="row">
          <div className="col-3">
          <Sidebar />
          </div>
          <div className="col-9">
            <div className="page">              
      <h1>Каталог категории</h1>    
<div className="catalog-page">
<div className="product-list">
<div className="row">
{this.state.products.map(function(product,idx){
let productLink = '/product/'+product.id;
let productImage = '/images/'+product.image;
  return (    
          <div className="col-4" key={idx}>
                      <div className="product-item">
                        <div className="product-border">
                          <div className="product-item-image">
                            <img src={productImage} alt="" />
                          </div>
                          <div className="product-item-title">{product.name}</div>
                          <div className="product-item-descr">  
                            {product.description}    
                          </div>
                          <div className="product-item-price">{product.price} p</div>
                          <div className="product-item-buy"><a href={productLink} role="button" className="btn btn-primary">Купить</a></div>
                        </div>
                      </div>
                    </div>
       
    )
}.bind(this))}
</div>
</div>
</div>
            </div>
          </div>
        </div>
   </div>
    );
  }
}

export default Category;