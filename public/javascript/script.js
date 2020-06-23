var nasaApiKey = "fBiWK3of5I9V4spB9Sch2aWBzspsiqkJyncdT2wZ";
var searchTerm = "";

console.log(`
Developed by Joseph DeWoody
https://jpd61.github.io/

Repository:
https://github.com/jpd61/jpd61.github.io
`);


// Generated news populated at the bottom
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
            $('#news-contain').append(topNews);
    }
    })

var nasaRequest = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey;

var nasaImageDay = (event => {
    fetch(nasaRequest)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
        $('#nasa-pull').css("background-image", `url('${response.hdurl}')`);
        $('#nasa-title').html(`${response.title}`)
        $('#nasa-desc').html(`${response.explanation}`)
    })
})

nasaImageDay();