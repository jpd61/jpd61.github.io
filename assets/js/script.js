
console.log(`
Developed by Joseph DeWoody
https://jpd61.github.io/

Repository:
https://github.com/jpd61/jpd61.github.io
`);



var newsUrl = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'category=business&' +
          'apiKey=b25d20345a0649a68aca9e4e98da269d';
var req = new Request(newsUrl);
fetch(req)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        let topNews = 
        `   
            <h6>Top Business News (newsapi.org):</h6>
            <h6><a href="${response.articles[0].url}">${response.articles[0].title}</a></h6>
            <h6><a href="${response.articles[1].url}">${response.articles[1].title}</a></h6>
            <h6><a href="${response.articles[2].url}">${response.articles[2].title}</a></h6>
            <h6><a href="${response.articles[3].url}">${response.articles[3].title}</a></h6>
            <h6><a href="${response.articles[4].url}">${response.articles[4].title}</a></h6>
        `
        $('#news').html(topNews);
    })