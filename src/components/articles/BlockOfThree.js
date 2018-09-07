import React, { Component } from 'react';
import Reply from '@material-ui/icons/Reply';
import './blockOfThree.css';

class BlockOfThree extends Component {
    render() {
        console.log(this.props)
        let withImages = this.props.articles.filter(article => article.multimedia[0]);
        let withoutImages = this.props.articles.filter(article => !article.multimedia[0])
        let arrangedArticles = withImages.concat(withoutImages);
        let mappedArticles = arrangedArticles.map((article, i) => {
            if (i === 0) {
                if (article.multimedia[0]) {
                    return (
                        <div key={article.title}>
                            <img src={article.multimedia[4]['url'] } alt='' style={{ height: '276.4px', marginBottom: '12px' }} />
                            <div style={{ margin: '7px 25px 25px' }}>
                                <h3 style={{ fontSize: '26px', margin: '0', fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.title}</h3>
                                <p style={{ fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.abstract}</p>
                                <Reply className='link-arrow'></Reply>
                            </div>
                            <br />
                            <hr className='dividing-article-line'/>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={article.title}>
                        <div style={{ margin: '7px 25px 25px' }}>
                            <h3 style={{ fontSize: '26px', margin: '0', fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.title}</h3>
                            <p style={{ fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.abstract}</p>
                            <Reply className='link-arrow'></Reply>
                        </div> 
                            <br />
                            <hr className='dividing-article-line'/>
                        </div>
                    )
                }
            }
            else if (i === 1) {
                return (
                    <div key={article.title}>
                    <div style={{ margin: '7px 25px 25px' }}>
                        <h3 style={{ fontSize: '20px', margin: '0', fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.title}</h3>
                        <p style={{ fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.abstract}</p>
                        <Reply className='link-arrow'></Reply>
                    </div> 
                        <br />
                        <hr className='dividing-article-line'/>
                    </div>
                )
            }
            else if (i === 2) {
                return (
                    <div key={article.title} style={{ margin: '7px 25px 20px' }}>
                        <h3 style={{ fontSize: '20px', margin: '0', fontFamily: 'Playfair Display', textAlign: 'left' }}>{article.title}</h3>
                        <br />
                    </div>
                )
            }
        })
        return (
            <div>
                <div className='bottom-of-article-chunk'>
                {mappedArticles}
                </div> 
                <div className='header-ending-block'>
                    
                </div> 
            </div>
        )
    }
}

export default BlockOfThree