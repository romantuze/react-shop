import React from 'react';
import { Sidebar } from './Sidebar';


export class NewsPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {     
      id: parseInt(props.match.params.id,10),
      post: {}
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.id)
    .then(res=>res.json())
    .then(res=>{ this.setState({post: res}); })
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
<div className="catalog-page">
<div className="news-list">
<div className="row">
 
          <div className="col-12">
                      <div className="news-item">
                        <h1>{this.state.post.title}</h1>
                        <p>{this.state.post.body}</p>                        
                      </div>
                      <hr />
                    </div>
       
 
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

export default NewsPost;