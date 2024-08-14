// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '04955bd9d085421f802bac919373197d'

// Grab the news container
let newsAccording = document.getElementById('newsAccording');

//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
                let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-lg-0">
                                        <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>Breaking News ${index+1}: </b>${element["title"]}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapss${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccording">
                                    <div class="card-body">
                                        ${element["content"]}. <a href="${element['url']}" target="_blank">Read more</a>
                                    </div>
                                </div>
                            </div>`;
                newsHtml += news;
             
        });
        

        newsAccording.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

