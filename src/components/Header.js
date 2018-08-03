import React from 'react';

export class Header extends React.Component {
  render() {
    return (
         <header className="header">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <img src="/images/logo.png" alt=""/>
              <span>Интернет магазин ноутбуков</span>
            </div>
          </div>
          <div className="col-3">
            <div className="search-form">
              <div className="input-group">
                <div className="input-group-addon">Поиск</div>
                <input type="text" className="form-control" placeholder="" />
              </div>
            </div>        
          </div>
          <div className="col-3">
            <div className="header-phone">8 800 123 456</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;