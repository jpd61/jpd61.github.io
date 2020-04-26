
console.log(`
Developed by Joseph DeWoody
https://jpd61.github.io/

Repository:
https://github.com/jpd61/jpd61.github.io
`);



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

        for (i = 0; i < 5; i++) {
            let topNews = `   
            <h6><a href="${newsResponse.articles[i].url}">${newsResponse.articles[i].title}</a></h6>
            `;
            $('#news').append(topNews);

            // return fetch('https://api.giphy.com/v1/gifs/search?q=' +
            // newsResponse.articles[i].title +
            // '&api_key=Ig0KLAaZLoeBT9JfPAnR606tX2xozVrX')
    
            // .then((response) => {
            //     return response.json();
            //   })
            // .then((response) => {
            //     let gifImg = `<img src="${response.data[i].images.fixed_height.url}">`;
            // })
            // .then((response) => {
            // $('#news').append(gifImg);
            // })
    }
    })