//runs baguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

//function for search functionality
function liveSearch () {
    let photos = document.querySelectorAll('a');
    let search_query = document.getElementById("searchbox").value;

    for (var i = 0; i < photos.length; i++) {
        if(photos[i].getAttribute('data-caption').toLowerCase().includes(search_query.toLowerCase())) {
            photos[i].classList.remove("is-hidden");
        } else {
            photos[i].classList.add("is-hidden");
        }
    }
}