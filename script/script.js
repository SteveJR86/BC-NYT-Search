APIKey = "51WNZAt7XcGybQdzDyd4VnDq0A2yLdli";
searchTerm = "rats";
startYear = 2014;
endYear = 2016;

function getNewsArticles(searchTerm, startYear, endYear){
  startDate = startYear + "0101";
  endDate = endYear + "1231";
  $.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + APIKey,
    method: "GET",
  }).then(function(response){
    const articleDiv = $('<div>');

  })
}

getNewsArticles("rats", "2015", "2018");