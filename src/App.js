import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header/Header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('/api/getArticles').then(res => {
      this.setState({
        articles: res.data.results
      })
    })
  }

  render() {
    console.log(this.state.articles)
    let mappedArticles = this.state.articles.map(article => {
      if(article.multimedia[0]) {
        return (
          <div style={{width: '200px'}} key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            <img src={article.multimedia[0]['url']} alt=''/>
            <br />
          </div> 
        )
      } else {
        return (
          <div style={{width: '200px'}} key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            <br />
          </div> 
        )
      }
    })
    return (
      <div className="App">
        <Header />
        {mappedArticles}
      </div>
    );
  }
}

export default App;
