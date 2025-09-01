const action_img = document.getElementById('action_pack');
const images = action_img.querySelectorAll('img');

images.forEach(function(el){
    el.addEventListener('click', function(e){
        window.open(el.src, '_blank');
    });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("nav_bar").classList.toggle("dark");
  document.querySelector("footer").classList.toggle("dark");
} )
