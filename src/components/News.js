import React from 'react';
import { Sidebar } from './Sidebar';


export class News extends React.Component {
  constructor(){
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(res=>{ this.setState({news: res}); console.log(res); })
    .catch(error=>{console.log(error)});
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
                    <h1>Новости</h1>    
                    <div className="catalog-page">
                    <div className="news-list">
                    <div className="row">
                    {this.state.news.slice(0, 10).map(function(post,idx){
                    let newsLink = '/news/'+post.id;
                      return (    
                              <div className="col-12" key={idx}>
                      <div className="news-item">
                        <h2><a href={newsLink}>{post.title}</a></h2>
                        <p>{post.body}</p>
                        <p><a class="btn btn-primary" href={newsLink}>Learn more »</a></p>
                      </div>
                      <hr />
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

export default News;