const axios = require('axios');

module.exports = {

    getTopStories: (req, res) => {
        async function articles () {
            let articles = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`).then(res => res.data);
            res.status(200).send(articles)
        }
        articles()
    },
}