
console.log(`
Developed by Joseph DeWoody
https://jpd61.github.io/

Repository:
https://github.com/jpd61/jpd61.github.io
`);

var searchTerm = "";

var newsUrl = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'category=business&' +
          'apiKey=b25d20345a0649a68aca9e4e98da269d';

var req = new Request(newsUrl);

fetch(req)
    .then((newsResponse) => {
        return newsResponse.json();
    })
    .then((newsResponse) => {
        
        for (let i = 0; i < 5; i++) {
            let searchTerm = newsResponse.articles[i].title;
            let topNews = `   
            <h6><a href="${newsResponse.articles[i].url}">${searchTerm}</a></h6>
            `;
            $('#news').append(topNews);



    }
    })