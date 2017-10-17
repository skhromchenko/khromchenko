$(document).ready(function(){

function load() {
   $('#quoteButton').click();
}
window.onload = load;

$('#quoteButton').unbind('click');
console.log("1")
$('#quoteButton').on("click", function() {
 console.log("2")
 $.getJSON({headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat='})
    .done(update)
    .fail(handleErr);
});
function update(response) {
 $('#text').empty().prepend(response.quote);
 $('#author').empty().prepend(response.author + "<br /></br>");
  
$(".tweet_button").attr("href", encodeURI("https://twitter.com/share?text=" + response.quote));
  }
function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}
})