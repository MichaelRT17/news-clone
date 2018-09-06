import React, { Component } from 'react';

class BlockOfThree extends Component {
    render() {
        let withImages = this.props.articles.filter(article => article.multimedia[0]);
        let withoutImages = this.props.articles.filter(article => !article.multimedia[0])
        let arrangedArticles = withImages.concat(withoutImages);
        let mappedArticles = arrangedArticles.map((article, i) => {
            if (i === 0) {
                if (article.multimedia[0]) {
                    return (
                        <div key={article.title}>
                            <img src={article.multimedia[1]['url']} alt='' style={{ height: '276.4px' }} />
                            <h3>{article.title}</h3>
                            <p>{article.abstract}</p>
                            <br />
                        </div>
                    )
                }
                else {
                    return (
                        <div key={article.title}>
                            <h3>{article.title}</h3>
                            <p>{article.abstract}</p>
                            <br />
                        </div>
                    )
                }
            }
            else if (i === 2) {
                return (
                    <div key={article.title}>
                        <h3>{article.title}</h3>
                        <p>{article.abstract}</p>
                        <br />
                    </div>
                )
            }
            else if (i === 3) {
                return (
                    <div key={article.title}>
                        <h3>{article.title}</h3>
                        <br />
                    </div>
                )
            }
        })
        return (
            <div>
                {mappedArticles}
            </div>
        )
    }
}

export default BlockOfThree