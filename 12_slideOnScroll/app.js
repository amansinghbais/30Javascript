const image = document.getElementById('image');
console.log(image.offsetHeight)
window.addEventListener('scroll',(e)=>{
    if(document.documentElement.scrollTop > 550){
        image.style.opacity = 1;
        image.style.transform = "translateX(0)";
    }else{
        image.style.opacity = 0;
        image.style.transform = "translateX(-150px)"
    }
})