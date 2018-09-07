import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import TopStories from './components/topStories/TopStories';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: []
    }
  }

  componentDidMount() {
    axios.get('/api/getTopStories').then(res => {
      this.setState({
        topStories: res.data.results.splice(0,12)
      })
    })
  }

  render() {
    console.log(this.state.topStories)
    let mappedArticles = this.state.topStories.map(article => {
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
        <TopStories articles={this.state.topStories}/>
        {/* {mappedArticles} */}
      </div>
    );
  }
}

export default App;
