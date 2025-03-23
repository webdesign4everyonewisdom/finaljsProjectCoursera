/* gallery.js */
function upDate(previewPic) {
   let imageDiv = document.getElementById("image");
   imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
   imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
   let imageDiv = document.getElementById("image");
   imageDiv.style.backgroundImage = "url('')";
   imageDiv.innerHTML = "Hover over or focus an image below to display here.";
}

function initGallery() {
   console.log("Gallery initialized");
   
   // Get all preview images
   let previewImages = document.getElementsByClassName("preview");
   
   // Add tabindex to each image
   for (let i = 0; i < previewImages.length; i++) {
       previewImages[i].setAttribute("tabindex", "0");
   }
}