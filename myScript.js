$(document).ready(function(){
var searchTxt = "1";
var urlApi = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  
$("#advancedSearchTextBox").autocomplete({
    source: function(request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'format': "json",
                'action': "opensearch",
                'search': request.term
            },
            success: function(data) {
                response(data[1]);
            }
        });
    }
});

$('#search').on("click", function() {
  var searchTxt = $('#advancedSearchTextBox').val();
  $('.container').animate({ top: "5%" }, 800); 
  $.ajax({
    url: urlApi+searchTxt,
    data: { 
           format: 'json',
           limit: 10
            },
    dataType: 'jsonp',
    type: 'GET',
    headers: { 'Api-User-Agent': '*' },
    success: function(res) {
      var num = 0;
      for(var i in res.query.pages){
        if(document.getElementById('search_result'+num)){
          document.getElementById('search_result'+num).remove();
        }
        $('#search_result'+num).empty();
        $("#content").append('<a  href=https://en.wikipedia.org/?curid='+res.query.pages[i].pageid+' style="text-decoration: none;">'+' <div class="search_list" id="search_result' + num +'"></div>' + "</a>");
        $("#search_result" + num).prepend( '<p>'+ res.query.pages[i].extract + '</p>' )
        num+=1;
      }
    }
  });
});
  
function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}
});
