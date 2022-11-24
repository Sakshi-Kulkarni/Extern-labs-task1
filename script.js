$(function() {
    $( "#imageId" ).sortable({
    update: function(event, ui) {
        getIdsOfImages();
    }//end update         
    });
});
  
function getIdsOfImages() {
    var values = [];
    $('.ImgList').each(function (index) {
        values.push($(this).attr("id")
                .replace("image", ""));
    });
      
}