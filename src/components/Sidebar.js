import React from 'react';




export class Sidebar extends React.Component {
  render() {
    return (
        <div className="sidebar">
              <div className="sidebar-widget">
                <nav className="bg-faded sidebar">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="/catalog/category/1">Lenovo <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/catalog/category/2">Acer</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/catalog/category/3">HP</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/catalog/category/4">Macbook</a>
                    </li>
                  </ul>                
                </nav>
              </div>
              <div className="sidebar-widget">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Фильтр товаров</h4>
                  </div>
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Корзина  товаров</h4>
                  </div>
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default Sidebar;