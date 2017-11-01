import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className="blog-header">
          <h1 className="blog-title">Shan's Blog</h1>
          <div className="lead blog-description">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort by
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li><a href="#">VoteScore</a></li>
              <li><a href="#">Date</a></li>
            </ul>
            &nbsp;
            <button className="btn btn-primary">Create a New Post</button>
          </div>
          </div>
        </div>
        <div className="row">

          <div className="col-sm-8 blog-main">
            <div className="blog-post">
              <h2 className="blog-post-title">Blog#1 <button className="btn btn-primary"><span className="badge">2</span></button>
               &nbsp;<span className="fa fa-fw fa-thumbs-up blog-post-icon text-primary" aria-hidden="true"></span>
               &nbsp;<span className="fa fa-fw fa-thumbs-down blog-post-icon" aria-hidden="true"></span></h2>
              <p className="blog-post-meta">Jan 1 2017 by <a href="#">Shan</a></p>
              <p>
                Content....
              </p>
              <h3 className="blog-post-comment">Comment:</h3>
              <p>comment 1</p>
            </div>

            <div className="blog-post">
              <h2 className="blog-post-title">Blog#2 <button className="btn btn-primary"><span className="badge">1</span></button>
              &nbsp;<span className="fa fa-fw fa-thumbs-up blog-post-icon " aria-hidden="true"></span>
              &nbsp;<span className="fa fa-fw fa-thumbs-down blog-post-icon text-primary" aria-hidden="true"></span></h2>
              <p className="blog-post-meta">Dec 31 2016 by <a href="#">Shan</a></p>
              <p>
                Content....
              </p>
            </div>

            <div className="blog-post">
              <h2 className="blog-post-title">Blog#3 <button className="btn btn-primary"><span className="badge">3</span></button>
              &nbsp;<span className="fa fa-fw fa-thumbs-up blog-post-icon " aria-hidden="true"></span>
              &nbsp;<span className="fa fa-fw fa-thumbs-down blog-post-icon " aria-hidden="true"></span></h2>
              <p>
                Content....
              </p>
            </div>
          </div>


          <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module sidebar-module-inset">
              <h4>Categories</h4>
              <ol className="list-unstyled">
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
              </ol>
            </div>
         </div>

        </div> 
      </div>

      <footer className="blog-footer">
        <p>
          Copyright
        </p>
      </footer>

    </div>
    );
  }
}

export default App;
